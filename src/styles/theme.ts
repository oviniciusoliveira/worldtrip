import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Popins, sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "gray.700",
      },
    },
  },
});
