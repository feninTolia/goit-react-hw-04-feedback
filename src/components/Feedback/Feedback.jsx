import React, { Component } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackBtnClick = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'goodBtn':
        this.setState(state => ({ good: (state.good += 1) }));
        break;

      case 'neutralBtn':
        this.setState(state => ({ neutral: (state.neutral += 1) }));
        break;

      case 'badBtn':
        this.setState(state => ({ bad: (state.bad += 1) }));
        break;

      default:
        console.log('Oooops! Sorry something went wrong =(');
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0 && neutral === 0 && bad === 0) {
      return;
    }
    return Number((good * 100) / (good + neutral + bad)).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onFeedbackBtnClick={this.handleFeedbackBtnClick} />
        {(good > 0 || neutral > 0 || bad > 0) && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  }
}
