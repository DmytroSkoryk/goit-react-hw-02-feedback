import classNames from 'classnames';
import React from 'react';
import css from './Feedback/Feedback.module.css';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <div className={classNames(css.container)}>
      <Section title="Please leave feedback">
        <FeedbackOptions handleIncrement={this.handleIncrement} />
      </Section>
      {total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
						/>
					</Section>
				)}
    </div>
    );
  }
}

export default App;