import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class Statistics extends React.Component {
      render () {
        const { good, neutral, bad } = this.props;
        const total = good + neutral + bad;
        const positiveFeedback = total === 0 ? 0 : `${Math.round((good / total) * 100)}%`;
       return( <div>
       <ul className={css.statistic}>
        <li className={css.statisticItem}><span>Good:</span><span>{good}</span></li>
        <li className={css.statisticItem}><span>Neutral:</span><span>{neutral}</span></li>
        <li className={css.statisticItem}><span>Bad:</span><span>{bad}</span></li>
        <li className={css.statisticItem}><span>Total:</span><span>{total}</span></li>
        <li className={css.statisticItem}><span>Positive feedback:</span><span>{positiveFeedback}</span></li>
      </ul>
      </div>
    );
      }
}


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

export default Statistics;