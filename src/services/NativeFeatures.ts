import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { SplashScreen } from '@capacitor/splash-screen';

export const NativeFeatures = {
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      return image.webPath;
    } catch (error) {
      console.error('Error taking picture:', error);
      throw error;
    }
  },

  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }
  },

  async hideSplashScreen() {
    try {
      await SplashScreen.hide();
    } catch (error) {
      console.error('Error hiding splash screen:', error);
    }
  }
};

export default NativeFeatures;
