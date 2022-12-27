import Proptypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonContainer}>
      {options.map(option => (
        <li>
          <button
            key={option}
            className={css.button}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: Proptypes.arrayOf(Proptypes.string.isRequired),
  onLeaveFeedback: Proptypes.func.isRequired,
};
