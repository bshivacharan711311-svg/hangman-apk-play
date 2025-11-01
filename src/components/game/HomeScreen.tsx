import { Button } from "@/components/ui/button";
import { Play, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HomeScreenProps {
  onStartGame: () => void;
}

export const HomeScreen = ({ onStartGame }: HomeScreenProps) => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 animate-fade-in">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Language Selector */}
      <div className="absolute top-6 right-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full card-glow">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={language === lang.code ? "bg-primary/10" : ""}
              >
                <span className="mr-2 text-xl">{lang.flag}</span>
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="text-center space-y-8 max-w-2xl w-full relative z-10">
        {/* Title with VFX */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-black gradient-text animate-scale-in floating">
            {t("title")}
          </h1>
          <div className="flex items-center justify-center gap-4 text-4xl floating" style={{ animationDelay: '0.5s' }}>
            <span>✨</span>
            <span>🎯</span>
            <span>🎮</span>
            <span>🌟</span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
            {t("subtitle")}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="text-8xl animate-bounce floating" style={{ animationDuration: '2s' }}>
            🎪
          </div>
          <div className="absolute -top-4 -right-4 text-4xl floating" style={{ animationDelay: '0.3s' }}>💫</div>
          <div className="absolute -bottom-4 -left-4 text-4xl floating" style={{ animationDelay: '0.6s' }}>⭐</div>
        </div>

        {/* Play Button with VFX */}
        <Button
          variant="game"
          size="xl"
          onClick={onStartGame}
          className="w-full max-w-sm mx-auto text-lg h-16 pulse-glow transform hover:scale-105 transition-all duration-300"
        >
          <Play className="mr-3 h-7 w-7" />
          {t("startPlaying")}
        </Button>

        {/* Instructions Card with VFX */}
        <div className="mt-12 p-6 bg-card/80 backdrop-blur-sm rounded-3xl border-2 border-primary/30 space-y-3 card-glow">
          <h3 className="font-bold text-xl text-primary">{t("howToPlay")}</h3>
          <ul className="text-base text-muted-foreground space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              {t("instruction1")}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▸</span>
              {t("instruction2")}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">▸</span>
              {t("instruction3")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
