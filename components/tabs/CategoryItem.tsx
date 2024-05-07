import { View, Text, Image } from "react-native";
import React from "react";

type CategoryItemProps = {
  category: Category;
  selected: string | null;
};

const CategoryItem = ({ category, selected }: CategoryItemProps) => {
  return (
    <View
      className={`bg-secondary aspect-square px-[15px] w-full rounded-2xl justify-center items-center ${
        selected === category.id && "bg-primary"
      }`}
    >
      <Image
        resizeMode="contain"
        className="w-[23px]"
        tintColor={selected === category.id ? "white" : "#484FE7"}
        source={category.icon}
      />
      {category.title ? (
        <Text className="text-textColor text-[13px] font-zregular pt-[15px]">
          {category.title}
        </Text>
      ) : null}
    </View>
  );
};

export default CategoryItem;
