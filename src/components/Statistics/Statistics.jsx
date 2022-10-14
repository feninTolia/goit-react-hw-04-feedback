import PropTypes from 'prop-types';
import React from 'react';
import { StatList } from '../Feedback/Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <StatList>
        <li>
          <p>Good:</p>
          <b>{good}</b>
        </li>
        <li>
          <p>Neutral:</p>
          <b>{neutral}</b>
        </li>
        <li>
          <p>Bad:</p>
          <b>{bad}</b>
        </li>
        <li>
          <p>Total:</p>
          <b>{total()}</b>
        </li>
        <li>
          <p>Positive feedback:</p>
          <b>{positivePercentage()}%</b>
        </li>
      </StatList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
