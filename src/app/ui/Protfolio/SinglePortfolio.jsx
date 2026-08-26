import PropTypes from 'prop-types';
import { Icon } from '../Icons/Icons';
import Link from 'next/link';

const SinglePortfolio = ({ data, getData }) => {
  const { imgLink, imgLinkLg, title, subTitle, href, effect, duration, delay } = data;

  const inner = (
    <div className="st-portfolio-item">
      <div className="st-portfolio st-zoom">
        <div className="st-portfolio-img st-zoom-in">
          <img src={imgLink} alt={title} />
        </div>
        <div className="st-portfolio-item-hover">
          <Icon icon={href ? 'mdi:arrow-right' : 'mdi:plus-circle'} />
          <h5>{title}</h5>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="col-lg-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {href ? (
        <Link href={href} className="st-portfolio-single st-style1">
          {inner}
        </Link>
      ) : (
        <div
          className="st-portfolio-single st-style1"
          onClick={() => getData(imgLinkLg, title, subTitle)}
        >
          {inner}
        </div>
      )}
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
  getData: PropTypes.func,
};

export default SinglePortfolio;
