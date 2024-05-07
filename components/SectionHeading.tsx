import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type SectionHeadingPros = {
  title?: string;
  icon?: any;
  iconColor?: any;
  iconSize?: any;
};

const SectionHeading = ({
  icon,
  title,
  iconSize,
  iconColor,
}: SectionHeadingPros) => {
  return (
    <LinearGradient
      colors={["#26292e", "#000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.9, y: 0 }}
      className="rounded-2xl"
    >
      <View className="flex-row m-[2px] bg-black  px-[15px] h-[45px] items-center w-full rounded-2xl border text-[15px]">
        <Image
          source={icon}
          resizeMode="contain"
          className="w-[14px]"
          tintColor={iconColor}
        />
        <Text className="text-textColor text-[13px] font-zsemibold ml-[10px]">
          {title}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SectionHeading;
