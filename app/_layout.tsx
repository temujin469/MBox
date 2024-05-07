import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "ZonaPro-Black": require("../assets/fonts/ZonaPro-Black.ttf"),
    "ZonaPro-Bold": require("../assets/fonts/ZonaPro-Bold.ttf"),
    "ZonaPro-ExtraBold": require("../assets/fonts/ZonaPro-ExtraBold.ttf"),
    "ZonaPro-Light": require("../assets/fonts/ZonaPro-Light.ttf"),
    "ZonaPro-Ultra": require("../assets/fonts/ZonaPro-Ultra.ttf"),
    "ZonaPro-Regular": require("../assets/fonts/ZonaPro-Regular.ttf"),
    "ZonaPro-SemiBold": require("../assets/fonts/ZonaPro-SemiBold.ttf"),
    "ZonaPro-Thin": require("../assets/fonts/ZonaPro-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#17191D" style="light" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="search/[query]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="box/[query]" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
};

export default RootLayout;
