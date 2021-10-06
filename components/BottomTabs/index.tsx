import React from "react";
import { Box, Icon, Pressable, Text } from "native-base";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { faChartScatter } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useColorModeToken } from "../../hooks";

export const BottomTabs = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const iconColor = useColorModeToken("white", "gray.900");
  const activeColor = useColorModeToken("green.600", "green.600");

  return (
    <Box
      flexDirection="row"
      justifyContent="space-around"
      maxHeight="54px"
      flex="1"
      marginX="4"
      rounded="xl"
      backgroundColor="gray.800"
      bottom="6"
      position="absolute"
      shadow="9"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // @ts-ignore
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={label as string}
            flex="1"
            height="54px"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              size={20}
              as={
                <FontAwesomeIcon
                  color={isFocused ? activeColor : iconColor}
                  size={26}
                  icon={faChartScatter}
                />
              }
            />
            <Text fontWeight="700" color={isFocused ? activeColor : iconColor}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </Box>
  );
};
