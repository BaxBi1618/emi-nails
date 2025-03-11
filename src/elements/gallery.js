import "../styles/gallery.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';// Importujemy Splide i SplideSlide
import "@splidejs/splide/dist/css/splide.min.css";

function Gallery() {
  return (
    <section id="galeria">
      <h2>Galeria</h2>
        <Splide 
          options={{ 
            type: "loop",
            rewind:true,
            perPage: 1,
            focus  : 'center',
            width: "100%",  
            gap:"150px"}}>

          <SplideSlide>
        <img src="/images/galeria1.jpg" alt="zdjecie salonu" />
        </SplideSlide>
        <SplideSlide>
        <img src="/images/galeria2.jpg" alt="zdjecie salonu" />
        </SplideSlide>
        <SplideSlide>
        <img src="/images/galeria3.jpg" alt="zdjecie salonu" />
        </SplideSlide>
        <SplideSlide>
        <img src="/images/galeria4.jpg" alt="zdjecie salonu" />
        </SplideSlide>
        <SplideSlide>
        <img src="/images/galeria2.jpg" alt="zdjecie salonu" />
        </SplideSlide>
        </Splide>
    </section>
  );
}

export default Gallery;
