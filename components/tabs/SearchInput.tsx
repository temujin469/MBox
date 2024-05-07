import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";

const SearchInput = () => {
  return (
    <View className="px-[16px]">
      <View className="flex-row space-x-[10px] items-center justify-between bg-secondary rounded-2xl h-[50px] px-[15px]">
        <Image source={icons.Search} />
        <TextInput
          placeholderTextColor={"#636C77"}
          placeholder="Search box"
          className="flex-1 placeholder:font-zregular placeholder:text-[15px] text-textColor"
        />
        <Image source={icons.Voice} />
      </View>
    </View>
  );
};

export default SearchInput;
