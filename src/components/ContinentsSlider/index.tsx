import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { SlideItem } from "./SlideItem";
import { Continent } from "../../types/continent";

type ContinentsSliderProps = {
  continents: Continent[];
};

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
  return (
    <Box h="350px" w="100%" color="gray.100">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        style={{ height: "100%" }}
        autoplay={{
          delay: 1000,
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.title}>
            <SlideItem {...continent} link={`/continent/${continent.slug}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
