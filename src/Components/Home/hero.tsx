import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Hero1 from "../../assets/hero1.jpg"
import Hero2 from "../../assets/hero2.jpg"
import Hero3 from "../../assets/hero3.jpg"

export default function Hero() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="w-full h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${Hero1})`}}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${Hero2})`}}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${Hero3})`}}></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
