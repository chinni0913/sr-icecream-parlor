import Carousel from 'react-bootstrap/Carousel';
import SlideOne from '../../assets/slideOne.jpg';
import SlideTwo from '../../assets/slideTwo.jpg';
import SlideThree from '../../assets/slideThree.jpg';
import IceCream1 from '../../assets/floatIceOne.png';
import IceCream2 from '../../assets/floatIceTwo.png';
import IceCream3 from '../../assets/floatIceThree.png';
import 'animate.css';
import './Slider.css';

const carouselData = [
  {
    image: SlideOne,
    captionTitle: 'Scoop Into Joy 🍨',
    captionText: 'Treat yourself with every creamy bite.',
    animationImg: IceCream1,
    animationClass: 'img-rotate'
  },
  {
    image: SlideTwo,
    captionTitle: 'Swirl of Flavors 🍦',
    captionText: 'From classic vanilla to exotic berry bursts.',
    animationImg: IceCream2,
    animationClass: 'img-bounce'
  },
  {
    image: SlideThree,
    captionTitle: 'Happiness in a Cone 🍧',
    captionText: 'Because every day deserves a sweet moment.',
    animationImg: IceCream3,
    animationClass: 'img-swing'
  },
];

const Slider = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel fade interval={2000} controls={false} indicators={true} >
        {carouselData.map((slide, index) => (
          <Carousel.Item
            key={index}
            style={{
              height: '490px',
              background: '#ffeefd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Background image */}
            <img
              src={slide.image}
              className="img-fluid rounded animate__animated animate__fadeIn"
              alt={`slider${index + 1}`}
              style={{
                width: '100%',
                objectFit: 'cover',
                height: '100%',
                filter: 'brightness(85%)'
              }}
            />

            {/* Animated floating image */}
            <img
              src={slide.animationImg}
              alt={`animated-icon-${index}`}
              className={`animated-img ${slide.animationClass}`}
            />

            {/* Caption */}
            <Carousel.Caption
              className="animate__animated animate__fadeInUp"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#4c004c',
                fontWeight: 'bold',
                textShadow: '1px 1px white'
              }}
            >
              <h3 style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: '2rem' }}>
                {slide.captionTitle}
              </h3>
              <p style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                {slide.captionText}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
