import { Flex, Box, Image } from "@chakra-ui/react";
import { Content } from "../Content";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

type HeaderProps = {
  backButton?: boolean;
};

export function Header({ backButton = false }: HeaderProps) {
  const router = useRouter();

  return (
    <Flex as="header" w="100%" h={20} alignItems="center">
      <Content addMarginY={false}>
        <Flex alignItems="center" w="100%">
          {backButton && (
            <ArrowBackIcon
              w="6"
              h="6"
              cursor="pointer"
              onClick={() => router.back()}
            />
          )}
          <Box
            h="100%"
            marginX="auto"
            cursor="pointer"
            onClick={() => router.push("/")}
          >
            <Image
              alt="Logo worldtrip"
              src="/assets/images/world-trip-logo.png"
            />
          </Box>
        </Flex>
      </Content>
    </Flex>
  );
}
