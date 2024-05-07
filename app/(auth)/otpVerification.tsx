import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
import { CustomButton } from "../../components";
import Font5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

const OTPverification = () => {

  const handleSubmit =()=>{
    router.push("home")
  }
  return (
    <SafeAreaView className="h-full bg-black">
      <View className="p-[45px] flex-col justify-between h-full">
        <View>
          <CustomButton handlePress={()=>router.back()} containerStyles="bg-secondary w-[50px] h-[50px]">
            <Font5 name="arrow-left" color="#636C77" size={16} />
          </CustomButton>
          <View className="mt-[40px] mb-[40px]">
            <Text className="text-[40px] mb-2 font-zbold text-textColor">
              So good!
            </Text>
            <Text className="text-textColor text-[15px] font-zlight">
              Now enter the code we sent you.
            </Text>
          </View>
          <OtpInput
            numberOfDigits={4}
            focusColor="green"
            autoFocus={false}
            focusStickBlinkingDuration={500}
            // hideStick
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            theme={{
              pinCodeContainerStyle: {
                width: 64,
                height: 55,
                backgroundColor: "#17191D",
                borderWidth: 0,
              },
              pinCodeTextStyle: {
                color: "white",
                fontFamily: "ZonaPro-Regular",
                fontSize:16
              },
              focusStickStyle: {
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 100,
              },
              focusedPinCodeContainerStyle: {
                backgroundColor: "#484FE7",
              },
            }}
          />
          <View className="mt-[40px] justify-center flex-col items-center">
            <Text className="font-zthin text-[13px] text-[#636C77] mb-[30px]">
              You can ask for a new code
            </Text>
            <View>
              <Text className="rounded-2xl text-[#636C77] bg-secondary px-[18px] py-[15px]">
              00:58
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-end">
          <CustomButton handlePress={handleSubmit} containerStyles="bg-secondary w-[105px]">
            <Font5 name="arrow-right" size={16} color="#636C77" />
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPverification;
