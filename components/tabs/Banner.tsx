import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import icons from "../../constants/icons";

const banners = [
  {
    id: "1",
    title: "Clothes",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
  },
  {
    id: "2",
    title: "Mobile",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
  },
  {
    id: "3",
    title: "Food",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
  },
];

const Banner = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View
     className="mt-[25px]"
     >
      <FlatList
        horizontal
        data={banners}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            {/* <CategoryItem category={item} selected={selected} /> */}
            <View className="rounded-2xl overflow-hidden mx-[16px]">
              <Image
                src={item.img}
                style={{ width: screenWidth - 32, height: 150 }}
                className=""
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Banner;
