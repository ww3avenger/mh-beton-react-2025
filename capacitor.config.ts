import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mhbeton.app',
  appName: 'MH Beton',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FFFFFF',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
    },
    Geolocation: {
      permissions: ['location'],
    },
    Camera: {
      permissions: ['camera'],
    },
  },
};

export default config;
