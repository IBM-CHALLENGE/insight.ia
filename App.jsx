import Routes from "./src/routes/routes";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require("./assets/fonts/Montserrat-Regular.ttf"),
    'Montserrat-Bold': require("./assets/fonts/Montserrat-Bold.ttf"),
    'Montserrat-Black': require("./assets/fonts/Montserrat-Black.ttf"),
    'Poppins-Regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Black': require("./assets/fonts/Poppins-Black.ttf"),
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Bold': require("./assets/fonts/Roboto-Bold.ttf"),
    'Roboto-Black': require("./assets/fonts/Roboto-Black.ttf"),
    'Pacifico-Regular': require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1, height: '100%', width: '100%'}}>
      <Routes />
      <StatusBar translucent={false} backgroundColor="#3A39E6" />
    </View>
  );
}
