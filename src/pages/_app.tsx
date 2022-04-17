import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { makeServer } from "../services/mirage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/swiperjs.css";
import { QueryClientProvider } from "react-query";
import { queryCLient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCLient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
