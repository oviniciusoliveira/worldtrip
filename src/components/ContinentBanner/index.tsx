import { Flex, Text } from "@chakra-ui/react";
import { Content } from "../Content";

type ContinentBannerProps = {
  backgroundImage: string;
  title: string;
};

export function ContinentBanner({
  backgroundImage,
  title,
}: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={["300px", "400px", "500px"]}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`}
      backgroundSize="cover"
      color="gray.100"
      overflow="visible"
      backgroundPosition={["center", "center"]}
    >
      <Content>
        <Flex
          direction="column"
          justifyContent={["center", "flex-end", "flex-end"]}
          alignItems={["center", "flex-start", "flex-start"]}
          w="100%"
        >
          <Text fontSize={["5xl"]} fontWeight="medium">
            {title}
          </Text>
        </Flex>
      </Content>
    </Flex>
  );
}
