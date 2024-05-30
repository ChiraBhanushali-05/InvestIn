import React from 'react';
import styles from './Testimonials.module.css'; // Import the CSS module
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={styles.testimonialsContainer}>
      <h2 style={{ paddingBottom: '40px' }}>
        Top Growing categories to invest in
      </h2>
      <Slider {...settings}>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/realestate.jpg" alt="Real Estate" />
        </div>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/cloth.jpg" alt="Clothing Brands" />
        </div>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/organic.png" alt="Organic Farming" />
        </div>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/auto.jpg" alt="Auto Modification" />
        </div>
      </Slider>
    </section>
  );
};

export default Testimonials;
