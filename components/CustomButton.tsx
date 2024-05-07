import { ActivityIndicator, GestureResponderEvent, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title?: string;
  handlePress?:((event: GestureResponderEvent) => void) | undefined
  containerStyles?: string;
  titleStyles?: string;
  isLoading?: boolean;
  children?: React.JSX.Element;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  titleStyles,
  isLoading,
  children,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary rounded-2xl h-[55px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {children ? (
        <>
        {children}
        </>
      ) : (
        <Text
          className={`text-textColor font-zsemibold text-[15px] ${titleStyles}`}
        >
          {title}
        </Text>
      )}

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
