import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const Box = ({ item }: { item: BoxProps }) => {
  return (
    <TouchableOpacity onPress={()=>router.push(`box/${item.id}`)} className="flex-1">
      <View className="border-2 border-secondary rounded-2xl overflow-hidden relative">
        <LinearGradient
          className="aspect-square justify-center items-center"
          end={{ x: 0, y: 1 }}
          start={{ x: 1, y: 0 }}
          colors={
            item.type === "red"
              ? ["#9A1818", "transparent"]
              : item.type === "blue"
              ? ["#8D56F5", "transparent"]
              : item.type === "green"
              ? ["#46C138", "transparent"]
              : item.type === "orange"
              ? ["#FD9201", "transparent"] 
              : ["#FFCE54", "transparent"] 

          }
        >
          {item.tag && (
            <View className="bg-white p-[10px] rounded-bl-2xl rounded-tr-2xl absolute top-0 right-0">
              <Text className="text-black text-[11px] font-zsemibold">
                {item.tag}
              </Text>
            </View>
          )}

          <Image resizeMode="contain" source={item.img}  className="w-[90px] h-[78px]" />
        </LinearGradient>
        <View className="p-[15px]">
          <Text className="text-textColor mb-1 text-[15px] font-zregular">
            {item.title}
          </Text>
          <Text className="text-[#636C77] text-[11px] font-zlight mb-[15px]">
            {item.description}
          </Text>
          <View className="flex-row items-center">
            <Image
              source={icons.Thunder}
              className="mr-2"
              tintColor={
                item.type === "green"
                  ? "#99E54B"
                  : item.type === "red"
                  ? "#F13C3C"
                  : item.type === "blue"
                  ? "#8D56F5"
                  : item.type === "orange"
                  ? "#FFCE54"
                  : "#484FE7"
              }
            />
            <Text className="text-textColor text-[15px] font-zsemibold">
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Box;
