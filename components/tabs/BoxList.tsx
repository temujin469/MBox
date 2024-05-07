import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import images from "../../constants/images";
import CustomButton from "../CustomButton";
import Box from "./Box";
import Font6 from "@expo/vector-icons/FontAwesome6";
import { boxs, categories } from "../../assets/data";
import { LinearGradient } from "expo-linear-gradient";
import SectionHeading from "../SectionHeading";


const BoxList = () => {
  return (
    <View>
      {categories.map((category) => (
        <FlatList
          key={category.id}
          data={boxs}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{
            paddingHorizontal: 16,
            paddingBottom:16,
            gap: 12,
          }}
          renderItem={({ item }) => <Box item={item} />}
          ListHeaderComponentStyle={{
            paddingHorizontal: 16,
            marginBottom: 26,
          }}
          ListFooterComponentStyle={{
            paddingHorizontal: 16,
            marginTop: 10,
            marginBottom: 35,
          }}
          ListHeaderComponent={() => (
            <SectionHeading icon={category.icon} title={category.title}/>
          )}
          ListFooterComponent={() => (
            <View>
              <CustomButton containerStyles="bg-secondary h-[45px]">
                <Font6 name="arrow-right" color="#636C77" size={12} />
              </CustomButton>
            </View>
          )}
        />
      ))}
    </View>
  );
};

export default BoxList;
