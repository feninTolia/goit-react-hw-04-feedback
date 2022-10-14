import PropTypes from 'prop-types';
import { FeedbackCard } from '../Feedback/Feedback.styled';

export const Section = ({ children, title }) => {
  return (
    <FeedbackCard>
      <h1>{title}</h1>
      {children}
    </FeedbackCard>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
