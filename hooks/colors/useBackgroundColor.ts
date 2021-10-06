import { useColorModeToken } from "./useColorModeToken";

export const useBackgroundColor = () =>
  useColorModeToken("gray.100", "gray.900");
