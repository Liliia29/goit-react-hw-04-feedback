import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper,  Button} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ feedbackOptions, onLeaveFeedback}) => {
  return (
    <ButtonWrapper>
      {feedbackOptions.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          <span>{option}</span>
        </Button>
      ))}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
    feedbackOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  
};
