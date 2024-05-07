import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import CustomButton from "../CustomButton";

const MainHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-[16px] py-[25px]">
      <CustomButton containerStyles="bg-secondary w-[50px] h-[50px]">
        <Image source={icons.Menu} />
      </CustomButton>
      <Text className="text-textColor font-zbold text-[25px]">M box</Text>
      <CustomButton containerStyles="bg-secondary w-[50px] h-[50px]">
        <Image source={icons.Bell} />
      </CustomButton>
    </View>
  );
};

export default MainHeader;
