import PropTypes from 'prop-types';
import css from './Feedback.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul className={css.statistic}>
        <li className={css.statisticItem}>
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li className={css.statisticItem}>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li className={css.statisticItem}>
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
        <li className={css.statisticItem}>
          <span>Total:</span>
          <span>{total}</span>
        </li>
        <li className={css.statisticItem}>
          <span>Positive feedback:</span>
          <span>{positivePercentage}</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
