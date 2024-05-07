import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity
      onPress={handleToggle}
      className={`flex-row justify-between items-center rounded-[35px] p-[5px] bg-tertiary ${isToggled && "flex-row-reverse"}`}
    >
      <View className="bg-secondary h-[20px] w-[20px] rounded-[100px]" />
      <View className=" h-[20px] w-[20px] rounded-[100px] items-center justify-center">
        <View className={`h-[7px] w-[7px] rounded-[100px] bg-[#636C77] ${isToggled && "bg-[#89C053]"}`}/>
      </View>
    </TouchableOpacity>
  );
};

export default Switch;
