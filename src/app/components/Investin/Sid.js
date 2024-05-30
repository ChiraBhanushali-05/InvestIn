"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SId.module.css';

const Sid = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/Inv.png" alt="Category 1" />
        </div>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/abc.png" alt="Clothing Brands" />
        </div>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/read2.jpg" alt="Category 4" />
        </div>
        <div className={styles.slideWrapper}>
          <img className={styles.slideImage} src="/star.jpeg" alt="Category 5"/>
        </div>
      </Slider>
    </section>
  );
};

export default Sid;
