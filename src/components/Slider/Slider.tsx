import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.scss";

// Custom arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

function Slide() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    slidesPerRow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container">
      <section className="section">
        <Slider {...settings}>
          <div>
            <img
              className={style.image}
              src="/src/images/course-2.jpg"
              alt="menu burger avec coca"
            />
          </div>
          <div>
            <img
              className={style.image}
              src="/src/images/diopo-2.jpg"
              alt="burger au boeuf et laitue"
            />
          </div>
          <div>
            <img
              className={style.image}
              src="/src/images/photo-bg-2.jpg"
              alt="burger au boeuf et laitue"
            />
          </div>
          <div>
            <img
              className={style.image}
              src="/src/images/profil-2.jpg"
              alt="burger au boeuf et laitue"
            />
          </div>
          <div>
            <img
              className={style.image}
              src="/src/images/course-2.jpg"
              alt="burger au boeuf et laitue"
            />
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Slide;
