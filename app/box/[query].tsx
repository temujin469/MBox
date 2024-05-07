import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { boxs, products } from "../../assets/data";
import { LinearGradient } from "expo-linear-gradient";
import { Card, CustomButton, SectionHeading, Switch } from "../../components";
import icons from "../../constants/icons";
import Font6 from "@expo/vector-icons/FontAwesome6";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BoxDetail = () => {
  const { query } = useLocalSearchParams();
  const [box, setBox] = useState<BoxProps | undefined>(undefined);

  useEffect(() => {
    const currrentBox = boxs.find((box) => box.id === query);
    setBox(currrentBox);
  }, [query]);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleClosePress = ()=> bottomSheetRef.current?.close();
  const handleOpenPress =()=> bottomSheetRef.current?.expand();

  // const snapPionts = useMemo(() => ["50%"], []);

  // if (!box) return null;

  const bgColor =
    box?.type === "green"
      ? "bg-[#4AC93B]"
      : box?.type === "red"
      ? "bg-[#F13C3C]"
      : box?.type === "blue"
      ? "bg-[#8D56F5]"
      : box?.type === "orange"
      ? "bg-[#FD9201]"
      : "bg-[#484FE7]";

  const iconColor =
    box?.type === "green"
      ? "#bdff7b"
      : box?.type === "red"
      ? "#fc6161"
      : box?.type === "blue"
      ? "#484FE7"
      : box?.type === "orange"
      ? "#FFCE54"
      : "#484FE7";

  return (
    <SafeAreaView className="h-full bg-black">
      <FlatList
        // scrollEnabled={false}
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          gap: 12,
        }}
        renderItem={({ item }) => <Card product={item} />}
        ListHeaderComponentStyle={{
          // paddingHorizontal: 16,
          marginBottom: 26,
        }}
        ListHeaderComponent={() => (
          <>
            <View>
              <View className="flex-row px-[16px] py-[25px] z-50 items-center justify-between absolute left-0 top-0 w-full">
                <CustomButton
                  handlePress={() => router.back()}
                  containerStyles="bg-black/50 z-90 w-[50px] h-[50px]"
                >
                  <Font6 name="arrow-left" size={24} color="white" />
                </CustomButton>
                <Text className="text-textColor font-zsemibold text-[15px]">
                  {box?.title}
                </Text>
              </View>
              {box ? (
                <LinearGradient
                  className="aspect-[6/7] justify-center items-center relative"
                  end={{ x: 1, y: 1 }}
                  start={{ x: 2, y: 0 }}
                  colors={
                    box.type === "red"
                      ? ["#9A1818", "transparent"]
                      : box.type === "blue"
                      ? ["#8D56F5", "transparent"]
                      : box.type === "green"
                      ? ["#46C138", "transparent"]
                      : box.type === "orange"
                      ? ["#FD9201", "transparent"]
                      : ["#FFCE54", "transparent"]
                  }
                >
                  <Image
                    resizeMode="contain"
                    source={box?.img}
                    className="h-[140px] w-[160px]"
                  />
                  <CustomButton
                    handlePress={()=>handleOpenPress()}
                    containerStyles={`h-[50px] absolute bottom-[0px] px-[37px] ${bgColor}`}
                  >
                    <View className="flex-row items-center">
                      <Text className="text-textColor mr-2 text-[15px] font-zsemibold">
                        Open for
                      </Text>
                      <Image
                        source={icons.Thunder}
                        className="mr-2"
                        tintColor={iconColor}
                      />
                      <Text className="text-textColor text-[15px] font-zsemibold">
                        {box.price}
                      </Text>
                    </View>
                  </CustomButton>
                </LinearGradient>
              ) : null}
            </View>

            <View className="border-[#4248524b] border mx-[16px] my-[30px]" />

            <View className="px-[16px]">
              <View className="bg-secondary px-[18px] rounded-2xl h-[55px] flex-row justify-between items-center mb-[30px]">
                <Text className="text-textColor text-[13px]">Box Contain</Text>
                <Switch />
              </View>
              <SectionHeading
                icon={icons.boxIcon}
                iconColor={iconColor}
                title="items in the box"
              />
            </View>
          </>
        )}
      />
      <BottomSheet
        enablePanDownToClose={true}
        snapPoints={["60%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor: "white",
        }}
        backgroundStyle={{
          backgroundColor: "#101214",
        }}
      >
        <BottomSheetView
          style={{
            height: "100%",
            // backgroundColor: "#101214",
            paddingTop: 45,
            paddingHorizontal: 55,
            paddingBottom: 55,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text className="text-[40px]">🎁️</Text>
          <Text className="text-[30px] text-textColor font-zbold">Ready?</Text>
          <Text className="text-[15px] leading-6 text-center text-textColor font-zlight">
            Would you like to open an Apple Box for 5'999.00?
          </Text>
          <View className="w-full">
            <CustomButton
              containerStyles={`h-[50px] mb-[16px] w-full ${bgColor}`}
            >
              <View className="flex-row items-center">
                <Text className="text-textColor mr-2 text-[15px] font-zsemibold">
                  Open for
                </Text>
                <Image
                  source={icons.Thunder}
                  className="mr-2"
                  tintColor={iconColor}
                />
                <Text className="text-textColor text-[15px] font-zsemibold">
                  {box?.price}
                </Text>
              </View>
            </CustomButton>
            <CustomButton
            handlePress={handleClosePress}
              containerStyles="w-full bg-tertiary h-[50px]"
              title="Cencel"
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default BoxDetail;
