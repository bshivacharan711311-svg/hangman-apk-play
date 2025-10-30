# 🎮 Hangman Game

A beautiful, mobile-first word guessing game built with React, TypeScript, and Vite. Features Progressive Web App (PWA) capabilities for installation on mobile devices.

## ✨ Features

- **Home Screen**: Welcome screen with play button and instructions
- **Interactive Gameplay**: 
  - Virtual keyboard for letter selection
  - Progressive hangman illustration
  - Real-time word reveal
  - 6 chances to guess
- **Result Screens**: Win/lose screens with replay option
- **PWA Support**: Install as a native app on Android and iOS
- **Responsive Design**: Beautiful on all screen sizes
- **Offline Play**: Works without internet connection once installed

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## 📱 Installing as Mobile App

### Android

1. **Option 1: Install from Browser (PWA)**
   - Open the app in Chrome/Edge on your Android device
   - Tap the menu (⋮) and select "Install app" or "Add to Home Screen"
   - The app will be installed and appear in your app drawer

2. **Option 2: Generate APK**
   - Use [PWA Builder](https://www.pwabuilder.com/) to generate an APK
   - Upload your deployed app URL
   - Download the Android package
   - Install on your device

### iOS (iPhone/iPad)

1. Open the app in Safari
2. Tap the Share button (□ with arrow)
3. Scroll and tap "Add to Home Screen"
4. The app will appear on your home screen like a native app

## 🎯 How to Play

1. Tap **Start Playing** on the home screen
2. Guess letters by tapping the keyboard buttons
3. Correct letters reveal in the word
4. Wrong guesses add to the hangman figure
5. Win by guessing the word before 6 wrong guesses
6. Tap **Play Again** to start a new game

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI components
- **Vite PWA Plugin** - Progressive Web App features
- **React Router** - Navigation

## 📂 Project Structure

```
src/
├── components/
│   ├── game/
│   │   ├── HomeScreen.tsx      # Home screen component
│   │   ├── GameScreen.tsx      # Main game logic
│   │   ├── HangmanSVG.tsx      # Hangman illustration
│   │   └── ResultModal.tsx     # Win/lose modal
│   └── ui/                     # Shadcn UI components
├── pages/
│   └── Index.tsx               # Main page
├── App.tsx                     # App setup
└── index.css                   # Global styles & design system
```

## 🎨 Design System

The app uses a colorful, kid-friendly design with:
- **Primary**: Bright teal (#1eb8b8)
- **Secondary**: Warm orange
- **Accent**: Sunny yellow
- **Smooth animations** and bounce effects
- **Large touch targets** for mobile

## 📝 License

This project is built with [Lovable](https://lovable.dev/)

---

Made with ❤️ using Lovable
