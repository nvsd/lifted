import { useColorModeValue, useToken } from "native-base";

export const useColorModeToken = (
  light: string,
  dark: string,
  property = "colors"
) => useToken(property, useColorModeValue(light, dark));
