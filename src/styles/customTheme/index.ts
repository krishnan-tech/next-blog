import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import fonts from "./fonts";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme: ThemeConfig = extendTheme({
  fonts,
  config,
});

export default customTheme;
