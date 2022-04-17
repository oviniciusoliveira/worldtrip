import { GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

type TravelTypeItemProps = {
  src: string;
  alt: string;
  text: string;
};

export function TravelTypeItem({ src, alt, text }: TravelTypeItemProps) {
  return (
    <GridItem
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image alt={alt} src={src} height={85} width={85} />
      <Text mt="3">{text}</Text>
    </GridItem>
  );
}
