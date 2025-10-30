# 📱 Export as Android APK - Complete Guide

This guide will help you convert your Hangman PWA into an installable Android APK.

## Method 1: Install Directly (Easiest - No APK Needed) ✨

The easiest way is to simply install the PWA directly:

1. **Deploy your app** by clicking the "Publish" button in Lovable
2. Open the deployed URL on your Android phone using Chrome or Edge
3. Tap the menu (⋮) and select **"Install app"** or **"Add to Home Screen"**
4. The app installs instantly and appears in your app drawer!

**Advantages:**
- ✅ Instant installation
- ✅ No APK file needed
- ✅ Auto-updates when you redeploy
- ✅ Works offline
- ✅ Full screen, app-like experience

## Method 2: Generate APK with PWA Builder 📦

If you need an actual APK file to distribute:

### Step 1: Deploy Your App
1. Click **"Publish"** in Lovable (top right)
2. Copy your deployed app URL (e.g., `https://yourapp.lovable.app`)

### Step 2: Use PWA Builder
1. Go to [PWABuilder.com](https://www.pwabuilder.com/)
2. Paste your deployed URL and click **"Start"**
3. Wait for analysis (the tool will verify your PWA is ready)
4. Click **"Package For Stores"** → **Android**

### Step 3: Configure Android Package
1. Set your:
   - **Package Name**: com.yourname.hangman
   - **App Name**: Hangman Game
   - **Version**: 1.0.0
2. Choose **"Trusted Web Activity"** (recommended)
3. Click **"Generate"**

### Step 4: Download & Install
1. Download the generated `.zip` file
2. Extract it to find the `.aab` or `.apk` file
3. Transfer to your Android device
4. Enable **"Install from Unknown Sources"** in Android settings
5. Tap the APK to install!

## Method 3: Use Capacitor (Advanced) 🔧

For a native app with more features:

1. **Export to GitHub** from Lovable
2. Clone your repository locally
3. Install Capacitor:
   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init
   ```
4. Build and add Android:
   ```bash
   npm run build
   npx cap add android
   npx cap sync
   ```
5. Open in Android Studio:
   ```bash
   npx cap open android
   ```
6. Build APK from Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**

## 📱 Installing on Android Device

### Enable Installation
1. Go to **Settings → Security**
2. Enable **"Install unknown apps"** for Chrome/Files app
3. Or enable **"Unknown sources"** (older Android versions)

### Install the APK
1. Transfer the APK to your phone (via USB, email, or cloud)
2. Open the APK file using Files app
3. Tap **"Install"**
4. The app appears in your app drawer!

## ✅ What's Already Configured

Your app already has:
- ✅ PWA manifest with proper icons
- ✅ Service worker for offline functionality
- ✅ Mobile-optimized meta tags
- ✅ App icons (192x192 and 512x512)
- ✅ Proper theme colors
- ✅ Standalone display mode

## 🎨 Customizing Your APK

Before generating, you can customize:

### App Name
Edit `vite.config.ts`:
```typescript
manifest: {
  name: "Your Game Name",
  short_name: "Game",
}
```

### App Colors
Edit `vite.config.ts`:
```typescript
manifest: {
  theme_color: "#1eb8b8",  // App bar color
  background_color: "#e5f9f9",  // Splash screen
}
```

### App Icons
Replace `public/icon-192.png` and `public/icon-512.png` with your custom icons.

## 🚀 Publishing to Google Play Store

If you want to publish officially:

1. **Create a Google Play Developer account** ($25 one-time fee)
2. Use PWA Builder or Capacitor to generate a signed `.aab` file
3. Upload to Google Play Console
4. Fill in store listing details
5. Submit for review

**Note:** PWA Builder can generate a signed package ready for Play Store!

## 🆘 Troubleshooting

### "App not installed"
- Check if you enabled "Install from Unknown Sources"
- Try downloading the APK again
- Ensure you have enough storage space

### App doesn't work offline
- Wait a few seconds after first opening (service worker needs to cache)
- Close and reopen the app
- Check your internet connection on first load

### Icons not showing
- Clear browser cache
- Ensure icons are in `public/` folder
- Rebuild the app: `npm run build`

## 📚 Additional Resources

- [PWA Builder Documentation](https://docs.pwabuilder.com/)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Google Play Console](https://play.google.com/console)
- [Android Developer Guide](https://developer.android.com/studio/publish)

---

**Need help?** Check the README.md or Lovable documentation!
