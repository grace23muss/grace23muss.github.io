'use client'

import './Header.scss';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const LINKEDIN = 'https://www.linkedin.com/in/grace-mussimbi-a12173214/';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const pathname = usePathname();

  // react-scroll only works on the page that actually contains the sections.
  // On a lab page there is nothing to scroll to, so the nav has to navigate
  // home with a hash instead.
  const onHome = pathname === '/';

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`st-site-header st-sticky-header st-style1 ${isScrolled ? 'st-sticky-active' : ''}`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <Link className="st-site-branding" href='/' id="hero"><img src="/images/logo.svg" alt="Grace Mussimbi" /></Link>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  {NAV.map((item) => (
                    <li key={item.id}>
                      {onHome ? (
                        <ScrollLink
                          to={item.id}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          {item.label}
                        </ScrollLink>
                      ) : (
                        <Link
                          href={item.id === 'home' ? '/' : `/#${item.id}`}
                          onClick={() => setMobileToggle(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="st-nav-external">
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileToggle(false)}
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `} onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="sp-phone">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
                  </svg>
                  <a className="sp-phone-no" href="mailto:mussimbigrace@gmail.com">mussimbigrace@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header;
