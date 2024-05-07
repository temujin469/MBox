import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Card = ({ product }: { product: ProductProps }) => {
  return (
    <TouchableOpacity
    //   onPress={() => router.push(`box/${product.id}`)}
      className="flex-1"
    >
      <View className="border-2 border-secondary rounded-2xl overflow-hidden relative">
        <View className="aspect-square justify-center items-center">
          {/* {product.tag && (
            <View className="bg-white p-[10px] rounded-bl-2xl rounded-tr-2xl absolute top-0 right-0">
              <Text className="text-black text-[11px] font-zsemibold">
                {item.tag}
              </Text>
            </View>
          )} */}

          <Image
            resizeMode="contain"
            source={product.img}
            className="w-[66px] h-[95px]"
          />
        </View>
        <View className="p-[15px] bg-secondary">
          <Text className="text-textColor mb-1 text-[15px] font-zregular">
            {product.title}
          </Text>
          <Text className="text-[#636C77] text-[11px] font-zlight mb-[15px]">
            {product.description}
          </Text>
          <View className="flex-row items-center">
            {/* <Image
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
            /> */}
            <Text className="text-textColor text-[15px] font-zbold">
              ${product.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
