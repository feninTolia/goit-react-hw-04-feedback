import { useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackBtnClick = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'goodBtn':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutralBtn':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'badBtn':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        alert('Oooops! Sorry something went wrong =(');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return;
    }
    return Number((good * 100) / (good + neutral + bad)).toFixed(0);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onFeedbackBtnClick={handleFeedbackBtnClick} />
      {(good > 0 || neutral > 0 || bad > 0) && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </Section>
  );
};

export default Feedback;
