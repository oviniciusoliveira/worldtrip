import { GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/react";
import { CircleIcon } from "../CircleIcon";

type TravelTypeItemProps = {
  src: string;
  alt: string;
  text: string;
};

export function TravelTypeItem({ src, alt, text }: TravelTypeItemProps) {
  const showIcon = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <GridItem
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {showIcon && <Image alt={alt} src={src} height={85} width={85} />}
      {!showIcon && <CircleIcon color="yellow.500" />}
      <Text mt="3" fontSize={["xl", "lg"]}>{text}</Text>
    </GridItem>
  );
}
