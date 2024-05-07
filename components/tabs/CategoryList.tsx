import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../../assets/data";


const CategoryList = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChooseCategory = (id: string) => {
    setSelected(id);
  };
  return (
    <FlatList
      className=""
      data={categories}
      scrollEnabled={false}
      numColumns={3}
      columnWrapperStyle={{
        gap: 20,
        marginHorizontal: 25,
      }}
      contentContainerStyle={{
        marginVertical:10,
        gap: 20,
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      // ListHeaderComponent={() => (
      //   <TouchableOpacity>
      //     <View
      //       className={`bg-secondary mr-[10px] px-[15px] h-[45px] rounded-2xl flex-row items-center`}
      //     >
      //       <Image tintColor={"white"} source={icons.Search} />
      //     </View>
      //   </TouchableOpacity>
      // )}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="flex-1"
          onPress={() => handleChooseCategory(item.id)}
        >
          <CategoryItem category={item} selected={selected} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;
