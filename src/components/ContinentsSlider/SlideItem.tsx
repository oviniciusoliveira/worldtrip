import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

type SlideItemProps = {
  file: string;
  alt: string;
  title: string;
  subtitle?: string;
  link: string;
};

export function SlideItem({
  file,
  alt,
  title,
  subtitle,
  link,
}: SlideItemProps) {
  const router = useRouter();

  return (
    <SwiperSlide
      onClick={() => router.push(link)}
      style={{ cursor: "pointer" }}
      
    >
      <Image
        alt={alt}
        layout="fill"
        src={file}
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
