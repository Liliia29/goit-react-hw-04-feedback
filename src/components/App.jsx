import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  
  const  onLeaveFeedback = btnType => {
    switch (btnType) {
      case 'good':
      setGood(state => state + 1);
      break;

      case 'neutral':
        setNeutral(state => state + 1);
      break;

      case 'bad':
        setBad(state => state + 1);
      break;
      default:
        return;
    }
};

const total = good + neutral + bad;
  const positivePercentage =  Math.round((good / total) * 100) || 0;
  

     return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            feedbackOptions={options}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
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
      </Container>
    );
  };

