import PropTypes from 'prop-types';
import { FeedbackControl } from './Feedback.styled';

const FeedbackOptions = ({ onFeedbackBtnClick }) => {
  return (
    <>
      <FeedbackControl
        name="goodBtn"
        type="button"
        onClick={onFeedbackBtnClick}
      >
        Good
      </FeedbackControl>
      <FeedbackControl
        name="neutralBtn"
        type="button"
        onClick={onFeedbackBtnClick}
      >
        Neutral
      </FeedbackControl>
      <FeedbackControl name="badBtn" type="button" onClick={onFeedbackBtnClick}>
        Bad
      </FeedbackControl>
    </>
  );
};

FeedbackOptions.propTypes = {
  onFeedbackBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
