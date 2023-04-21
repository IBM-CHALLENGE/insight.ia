import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/routes";

export default function App() {
  const [loaded] = useFonts({
    'Montserrat 400': require("./assets/fonts/Montserrat-Regular.ttf"),
    'Montserrat 700': require("./assets/fonts/Montserrat-Bold.ttf"),
    'Montserrat 900': require("./assets/fonts/Montserrat-Black.ttf"),
    'Poppins 400': require("./assets/fonts/Poppins-Regular.ttf"),
    'Poppins 700': require("./assets/fonts/Poppins-Bold.ttf"),
    'Poppins 900': require("./assets/fonts/Poppins-Black.ttf"),
    'Roboto 400': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto 700': require("./assets/fonts/Roboto-Bold.ttf"),
    'Roboto 900': require("./assets/fonts/Roboto-Black.ttf"),
    'Pacifico': require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Routes />
      <StatusBar translucent={false} backgroundColor="#3A39E6" />
    </>
  );
}
