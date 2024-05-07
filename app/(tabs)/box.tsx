import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BoxList,
  CategoryItem,
  MainHeader,
  SearchInput,
} from "../../components";
import Banner from "../../components/tabs/Banner";
import { FlatList, TouchableOpacity } from "react-native";
import { categories } from "../../assets/data";


const Box = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChooseCategory = (id: string) => {
    setSelected(id);
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={categories}
        numColumns={3}
        columnWrapperStyle={{
          gap: 16,
          marginHorizontal: 25,
        }}
        contentContainerStyle={{
          gap: 16,
          paddingBottom:80
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponentStyle={{
          // marginBottom:9
          marginBottom:19
        }}
        ListFooterComponentStyle={{
          marginTop:19
        }}
        ListHeaderComponent={() => (
          <>
          <MainHeader/>
          <SearchInput/>
          <Banner/>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-1"
            onPress={() => handleChooseCategory(item.id)}
          >
            <CategoryItem category={item} selected={selected} />
          </TouchableOpacity>
        )}

        ListFooterComponent={<BoxList/>}
      />
    </SafeAreaView>
  );
};

export default Box;
