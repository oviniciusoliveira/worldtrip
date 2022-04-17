import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

type SlideItemProps = {
  file: string;
  alt: string;
  title: string;
  subtitle?: string;
};

export function SlideItem({ file, alt, title, subtitle }: SlideItemProps) {
  return (
    <SwiperSlide>
      <Image
        alt={alt}
        layout="fill"
        src={`/assets/images/${file}`}
        objectFit="cover"
        style={{
          zIndex: -1,
        }}
      />
      <Box
        position="fixed"
        zIndex={-1}
        height="350px"
        width="100%"
        backgroundColor="blue.900"
        opacity={0.2}
      />
      <Flex
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        height="100%"
      >
        <Text fontWeight="bold" fontSize="5xl">
          {title}
        </Text>
        {subtitle && (
          <Text fontWeight="bold" fontSize="2xl">
            {subtitle}
          </Text>
        )}
      </Flex>
    </SwiperSlide>
  );
}
