import { Image, Text, View } from "react-native";


type TabIconProps   = {
    icon: any;
    color:string;
    isfocused:boolean;
}



const TabIcon = ({ icon, color, isfocused }:TabIconProps) => {
    return (
      <View className={`flex-row items-center justify-center h-full border-t-2 border-transparent ${isfocused && ' border-primary' }`}>
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
      </View>
    );
  };

  export default TabIcon;