import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BoxList,
  CategoryItem,
  MainHeader,
  SearchInput,
} from "../../components";
import Banner from "../../components/tabs/Banner";
import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";
import { categories } from "../../assets/data";

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChooseCategory = (id: string) => {
    setSelected(id);
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={categories}
        numColumns={3}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{
          gap: 16,
          paddingHorizontal: 16,
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponentStyle={{
          // marginBottom:9
          marginBottom: 10,
        }}
        ListFooterComponentStyle={{
          marginTop: 10,
        }}
        ListHeaderComponent={() => (
          <>
            <MainHeader />
            <SearchInput />
            <Banner />
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
        ListFooterComponent={<BoxList />}
      />
    </SafeAreaView>
  );
};

export default Home;
