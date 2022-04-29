import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Content } from "../Content";

export function Banner() {
  return (
    <Flex
      w="100%"
      h="335"
      bgImage={"/assets/images/night-sky-background.png"}
      backgroundSize="cover"
      color="gray.100"
      overflow="visible"
    >
      <Content justifyContent="space-between" overflow="visible">
        <Flex direction="column" justify="center">
          <Text fontSize="4xl" fontWeight="medium">
            5 Continentes,
          </Text>
          <Text fontSize="4xl" fontWeight="medium">
            infinitas possibilidades
          </Text>
          <Text fontSize="xl" fontWeight="normal" maxW={524} mt="5">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Flex align="center" mb="-36" display={["none", "none", "none", "flex"]}>
          <Image
            src="/assets/images/airplane.png"
            alt="Airplane"
            width={420}
            height={270}
          />
        </Flex>
      </Content>
    </Flex>
  );
}
