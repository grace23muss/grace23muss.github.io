"use client"
import { useEffect } from 'react';
import './sass/style.scss'
import Footer from './ui/Footer/Footer';
import Aos from 'aos';
import CustomCursor from './ui/CustomCursor/CustomCursor';


export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Grace Mussimbi" />
        <meta name="description" content="IT support and help desk portfolio. Active Directory and Windows Server lab documentation by Grace Mussimbi, Stoney Creek, Ontario. Bilingual French and English, CompTIA Security+ certified." />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <title>Grace Mussimbi | IT Support & Help Desk</title>
      </head>
      <body>
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html> 
  );
}
