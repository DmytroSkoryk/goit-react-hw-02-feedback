import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
    const { handleIncrement } = this.props;
    return (
      <div>
        <ul className={css.feedbackBtn}>
          <li>
            <button type="button" className={css.btn} onClick={() => handleIncrement('good')}>
              Good
            </button>
          </li>
          <li>
            <button type="button" className={css.btn} onClick={() => handleIncrement('neutral')}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" className={css.btn} onClick={() => handleIncrement('bad')}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;