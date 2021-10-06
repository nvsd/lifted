import * as font from "@expo-google-fonts/inter";

export const fonts = {
  fontConfig: {
    Roboto: {
      100: {
        normal: "Inter-Hairline",
      },
      200: {
        normal: "Inter-Thin",
      },
      300: {
        normal: "Inter-Light",
      },
      400: {
        normal: "Inter-Regular",
      },
      500: {
        normal: "Inter-Medium",
      },
      600: {
        normal: "Inter-Semibold",
      },
      700: {
        normal: "Inter-Bold",
      },
      800: {
        normal: "Inter-Heavy",
      },
      900: {
        normal: "Inter-Black",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },
};
