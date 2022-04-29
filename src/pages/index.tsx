import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Content } from "../components/Content";
import { ContentDivider } from "../components/ContentDivider";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Text } from "@chakra-ui/react";
import { ContinentsSlider } from "../components/ContinentsSlider";
import { useContinents } from "../hooks/useContinents";

const Home: NextPage = () => {
  const { continents } = useContinents();

  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>
      <Header />
      <Banner />
      <Content mt="24">
        <TravelTypes />
      </Content>
      <ContentDivider />
      <Content
        flexDir="column"
        fontWeight="medium"
        textAlign="center"
        fontSize="4xl"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Content>
      <Content addPaddingX={false} addMarginY={false} marginTop={14}>
        <ContinentsSlider continents={continents} />
      </Content>
    </>
  );
};

export default Home;
