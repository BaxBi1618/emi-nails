import "../styles/gallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Navigation } from 'swiper/modules';

function Gallery() {
  return (
    <section id="galeria">
      <h2>Galeria</h2>
        <Swiper
          slidesPerView={'2'}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="/images/galeria1.jpg" alt="zdjecie salonu" /></SwiperSlide>
          <SwiperSlide><img src="/images/galeria2.jpg" alt="zdjecie salonu" /></SwiperSlide>
          <SwiperSlide><img src="/images/galeria3.jpg" alt="zdjecie salonu" /></SwiperSlide>
          <SwiperSlide><img src="/images/galeria1.jpg" alt="zdjecie salonu" /></SwiperSlide>
          <SwiperSlide><img src="/images/galeria2.jpg" alt="zdjecie salonu" /></SwiperSlide>
          <SwiperSlide><img src="/images/galeria3.jpg" alt="zdjecie salonu" /></SwiperSlide>
        </Swiper>
    </section>
  );
}

export default Gallery;
