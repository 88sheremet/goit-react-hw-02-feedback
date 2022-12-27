import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => {
      switch (event.target.textContent) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          return 0;
      }
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percent = (good / total) * 100;
    return Math.round(percent);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const stateKey = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKey}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
