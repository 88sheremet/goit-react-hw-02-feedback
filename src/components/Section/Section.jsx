import Proptypes from 'prop-types';
import css from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.sectionContainer}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: Proptypes.string.isRequired,
};
