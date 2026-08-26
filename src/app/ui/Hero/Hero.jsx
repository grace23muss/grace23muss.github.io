import PropTypes from 'prop-types';
import './Hero.scss';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from 'react';
import Image from 'next/image';
import imgLink from '../../../../public/images/section/hero-topology.png'

const Hero = ({ data, socialData }) => {
  const { subTitle, designation, title, bgImgLink } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.st-hero-wrap .st-hero-img');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="st-hero-wrap">
      <div
        className="st-hero st-bg st-style1"
        style={bgImgLink ? { backgroundImage: `url(${bgImgLink})` } : undefined}
      >
        <div className="st-height-b80 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {subTitle}
            </h3>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {parser(title)}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {designation}
            </h2>
            <div
              className="st-hero-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <ScrollLink
                className="st-btn st-style1 st-color1"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                View the lab writeups
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="st-hero-img st-to-right">
        <Image
          src={imgLink}
          alt="Hero"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
          placeholder='blur'
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero;
