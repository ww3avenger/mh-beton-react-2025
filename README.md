# MH Beton Web & Mobile App

Eine moderne React-basierte Webanwendung mit nativen iOS- und Android-Apps für MH Beton.

## Entwicklung

### Web-Entwicklung
```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build
```

### Mobile Apps

#### iOS
Voraussetzungen:
- macOS
- Xcode
- CocoaPods

```bash
# iOS-Build erstellen
npm run build
npx cap sync ios
npx cap open ios
```

#### Android
Voraussetzungen:
- Android Studio
- Java Development Kit (JDK)

```bash
# Android-Build erstellen
npm run build
npx cap sync android
npx cap open android
```

## Projektstruktur

```
src/
  ├── components/     # React-Komponenten
  │   ├── layout/    # Layout-Komponenten (Header, Footer, etc.)
  │   └── home/      # Startseiten-Komponenten
  ├── pages/         # Seiten-Komponenten
  ├── assets/        # Statische Assets
  └── styles/        # Globale Styles
```

## Deployment

### Web
1. Build erstellen: `npm run build`
2. Den Inhalt des `dist`-Verzeichnisses auf den Webserver hochladen

### Mobile Apps
- iOS: Über Xcode für den App Store builden und deployen
- Android: Über Android Studio für den Play Store builden und deployen
