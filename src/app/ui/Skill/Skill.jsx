import PropTypes from 'prop-types';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const Skill = ({ data }) => {
  const { title, text, specs } = data;
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Environment" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">{text}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <dl className="st-spec-list">
              {specs.map((element, index) => (
                <div
                  className="st-spec-row"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={200 + index * 60}
                >
                  <dt className="st-spec-key">{element.title}</dt>
                  <dd className="st-spec-value">{element.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
