import { Center } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
  return (
    <Center as="header" w="100%" h="20">
      <Image
        alt="Logo worldtrip"
        src="/assets/images/world-trip-logo.png"
        width={184}
        height={46}
      />
    </Center>
  );
}
