import { extendTheme } from "@chakra-ui/react";

import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  styles: {
    initialColorMode: "dark",
  },
  color: {
    initialColorMode: "dark",
  },
});

export default customTheme;
