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
      html: {
        fontSize: {
          base: "75%",
          sm: "85%",
          md: "95%",
          lg: "100%",
          xl: "100%",
        },
      },
      body: {
        color: "gray.700",
      },
    },
  },
});
