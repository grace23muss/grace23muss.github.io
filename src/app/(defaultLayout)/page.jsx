'use client'
import data from '../Data.json';
import React, { useEffect } from 'react'
import Hero from '../ui/Hero/Hero'
import About from '../ui/About/About';
import Iconbox from '../ui/Iconbox/Iconbox';
import Skill from '../ui/Skill/Skill';
import PortfolioSection from '../ui/Protfolio/PortfolioSection';
import Contact from '../ui/Contact/Contact';


export default function Home() {
  const { heroData, aboutData, serviceData, skillData, portfolioData, contactData, socialData } = data;

  // Arriving from a lab page as /#about or /#portfolio: the sections mount
  // after the browser has already given up looking for the anchor, so scroll
  // to it once the page is on screen.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    };
    const timer = setTimeout(scroll, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroData.homeOneHero} socialData={socialData} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}
