import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <div>
        <ul className={css.feedbackBtn}>
          {options.map(option => (
            <li key={option}>
              <button
                type="button"
                className={css.btn}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
