import "../styles/gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Gallery() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
  };
  return (
    <section id="galeria">
      <h2>Galeria</h2>
        <Slider {...settings}>
          <img src="/images/galeria1.jpg" alt="zdjecie salonu" />
          <img src="/images/galeria2.jpg" alt="zdjecie salonu" />
          <img src="/images/galeria3.jpg" alt="zdjecie salonu" />
        </Slider>
    </section>
  );
}

export default Gallery;
