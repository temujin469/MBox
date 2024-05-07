import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="getPhoneNumber"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="getUsername"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="iLikeIt"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="otpVerification"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
