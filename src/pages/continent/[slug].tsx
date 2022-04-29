import Head from "next/head";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { useContinents } from "../../hooks/useContinents";
import { useContinentCities } from "../../hooks/useContinentCities";
import { ContinentBanner } from "../../components/ContinentBanner";
import {
  Flex,
  Text,
  SimpleGrid,
  Grid,
  Box,
  Image,
  GridItem,
} from "@chakra-ui/react";
import { Content } from "../../components/Content";
import { NumberInfo } from "../../components/NumberInfo";

export default function ContinentPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { topVisitedCities } = useContinentCities(String(slug));
  const { getContinentBySlug } = useContinents();

  const continent = getContinentBySlug(String(slug));

  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>
      <Header backButton={true} />
      {continent && (
        <>
          <ContinentBanner
            backgroundImage={continent.file}
            title={continent.title}
          />
          <Content>
            <SimpleGrid columns={2} spacing={10} w="100%">
              <Text maxW="600" textAlign="justify">
                {continent.description}
              </Text>
              <Flex justifyContent="space-around">
                <NumberInfo number={continent.countriesCount} text="países" />
                <NumberInfo number={continent.languagesCount} text="línguas" />
                <NumberInfo
                  number={continent.citiesCount}
                  text="cidades +100"
                  showTooltip
                  tooltipLabel="Cidades entre as 100 mais visitadas do mundo"
                />
              </Flex>
            </SimpleGrid>
          </Content>
          <Content>
            <Flex flexDirection="column" w="100%">
              <Text fontSize="4xl" fontWeight="medium">
                Cidades +100
              </Text>

              <Grid
                width="100%"
                marginTop={5}
                gridTemplateColumns="repeat(auto-fit, minmax(235px, 1fr))"
                gap="8"
              >
                {topVisitedCities.map((city) => (
                  <GridItem key={city.id} w="100%">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      borderColor="rgba(255, 186, 8, 0.5)"
                    >
                      <Image src={city.imageFile} alt={city.name} />

                      <Flex
                        p="6"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Flex flexDirection="column">
                          <Text as="h2" fontWeight="medium" fontSize="xl">
                            {city.name}
                          </Text>

                          <Text as="h3" color="gray.500" fontSize="sm" mt={3}>
                            {city.country.name}
                          </Text>
                        </Flex>
                        <Flex
                          w="30px"
                          h="30px"
                          borderRadius="50%"
                          overflow="hidden"
                        >
                          <Image
                            src={city.country.flag}
                            alt={city.country.name}
                            w="40px"
                          />
                        </Flex>
                      </Flex>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Content>
        </>
      )}
    </>
  );
}
