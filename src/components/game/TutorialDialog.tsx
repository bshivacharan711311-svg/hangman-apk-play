import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface TutorialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const tutorialSteps = [
  {
    titleKey: "tutorialStep1Title",
    descKey: "tutorialStep1Desc",
    emoji: "🎯",
  },
  {
    titleKey: "tutorialStep2Title",
    descKey: "tutorialStep2Desc",
    emoji: "🔓",
  },
  {
    titleKey: "tutorialStep3Title",
    descKey: "tutorialStep3Desc",
    emoji: "✍️",
  },
  {
    titleKey: "tutorialStep4Title",
    descKey: "tutorialStep4Desc",
    emoji: "🏆",
  },
];

export const TutorialDialog = ({ open, onOpenChange }: TutorialDialogProps) => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!open) {
      setCurrentStep(0);
    }
  }, [open]);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    localStorage.setItem("hangman_tutorial_completed", "true");
    onOpenChange(false);
  };

  const handleSkip = () => {
    localStorage.setItem("hangman_tutorial_completed", "true");
    onOpenChange(false);
  };

  const step = tutorialSteps[currentStep];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            {t("tutorialTitle")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t("tutorialTitle")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step indicator */}
          <div className="flex justify-center gap-2">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Step content */}
          <div className="text-center space-y-4 min-h-[200px] flex flex-col items-center justify-center animate-fade-in">
            <div className="text-6xl animate-bounce">{step.emoji}</div>
            <h3 className="text-xl font-bold text-foreground">
              {t(step.titleKey)}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(step.descKey)}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center gap-2 pt-4">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="text-muted-foreground"
            >
              {t("skipTutorial")}
            </Button>

            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}

              {currentStep < tutorialSteps.length - 1 ? (
                <Button onClick={handleNext}>
                  {t("nextStep")}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleFinish} className="pulse-glow">
                  {t("gotIt")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
