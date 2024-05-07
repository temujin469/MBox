import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainHeader, Switch } from "../../components";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";

const menuItems = [
  { icon: icons.MyAccount, title: "My Account" },
  { icon: icons.Skull, title: "My Inventory" },
  { icon: icons.MyBox, title: "My Boxes" },
  { icon: icons.Transfer, title: "Transaction" },
  { seperator: true },
  { icon: icons.Notification, title: "Notification" },
  { icon: icons.Help, title: "Help Center" },
  { icon: icons.Info, title: "Term of Service" },
  { icon: icons.Shield, title: "Privacy" },
  { seperator: true },
  { icon: icons.Alphabet, title: "Change Language", component: Switch },
  { icon: icons.AboutUs, title: "About Us" },
  { icon: icons.Contact, title: "Contact Us" },
  { seperator: true },
  { icon: icons.Exit, title: "Log Out" },
];

const Profile = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={menuItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 110,
        }}
        // keyExtractor={(item,i) => i}
        ListHeaderComponentStyle={
          {
            // marginBottom:9
          }
        }
        ListFooterComponentStyle={{
          marginTop: 10,
        }}
        ListHeaderComponent={() => (
          <>
            <MainHeader />
            <View className="px-[16px] h-[226px] mb-[20px]">
              <View className="relative">
                <Image
                  className="h-[183px] w-full rounded-2xl"
                  src="https://t4.ftcdn.net/jpg/06/14/46/77/360_F_614467744_7eLjYhKWJIvnu8fk8MTp9VXFYpB15J3p.jpg"
                />
                <View className="absolute overflow-hidden bottom-0 left-[50%] translate-x-[-53px] translate-y-[53px] rounded-[100px] border-[5px] border-[#000]">
                  <Image
                    className="w-[105px] h-[105px]"
                    src="https://pics.craiyon.com/2023-07-02/4c0a45a93c9b4231b4fcaef8846c7852.webp"
                  />
                </View>
              </View>
            </View>
            <View className="flex-col items-center mb-[20px]">
              <Text className="text-textColor text-[25px] font-zbold">
                Temuujin
              </Text>
              <Text className="text-[#636C77] text-[15px] font-zregular">
                ttemujin469@gmail.com
              </Text>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <View className="px-[16px]">
            {item.seperator ? (
              <View className="h-[1px] w-full bg-secondary" />
            ) : (
              <TouchableOpacity className="bg-secondary px-[18px] h-[55px] rounded-2xl w-full flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Image source={item.icon} className="mr-[18px]" />
                  <Text className="text-textColor text-[15px] font-zregular">
                    {item.title}
                  </Text>
                </View>
                {item.component ? (
                  <item.component />
                ) : (
                  <Image source={icons.RightArrow} />
                )}
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
