import './Footer.scss';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="st-copyright-wrap text-center">
          <div className="st-copyright-text">© {currentYear} Grace Mussimbi · Stoney Creek, Ontario</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
