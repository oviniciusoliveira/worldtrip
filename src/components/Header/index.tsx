import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import { Content } from "../Content";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

type HeaderProps = {
  backButton?: boolean;
};

export function Header({ backButton = false }: HeaderProps) {
  const router = useRouter();

  return (
    <Flex as="header" w="100%" h="20" p="5">
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
              width={184}
              height={46}
            />
          </Box>
        </Flex>
      </Content>
    </Flex>
  );
}
