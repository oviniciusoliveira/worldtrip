import { Box, Flex, Image, Text } from "@chakra-ui/react";

type CityCardProps = {
  cityImage: string;
  cityName: string;
  countryName: string;
  countryFlag: string;
};

export function CityCard({
  cityImage,
  cityName,
  countryFlag,
  countryName,
}: CityCardProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="rgba(255, 186, 8, 0.5)"
    >
      <Image src={cityImage} alt={cityName} />

      <Flex p="6" justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <Text as="h2" fontWeight="medium" fontSize="xl">
            {cityName}
          </Text>

          <Text as="h3" color="gray.500" fontSize="sm" mt={3}>
            {countryName}
          </Text>
        </Flex>
        <Flex w="30px" h="30px" borderRadius="50%" overflow="hidden">
          <Image src={countryFlag} alt={countryName} w="40px" />
        </Flex>
      </Flex>
    </Box>
  );
}
