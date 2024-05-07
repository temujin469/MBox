import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import icons from "../../constants/icons";
import { TabIcon } from "../../components";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#17191D" style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#484FE7",
          tabBarInactiveTintColor: "#636C77",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1E2025",
            borderTopWidth: 0,
            height: 55,
            // maxWidth:310,
            position: "absolute",
            left: 45,
            right: 45,
            borderRadius: 15,
            bottom:25,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.homeIcon}
                color={color}
                isfocused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="box"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.boxIcon} color={color} isfocused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.ProfileIcon}
                color={color}
                isfocused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
