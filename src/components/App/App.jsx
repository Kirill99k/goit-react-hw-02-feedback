import React, { Component } from 'react';
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";
import { Container } from './App.styled';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStatus = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeadback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeadback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback" shadow="true">
          <FeedbackOptions
            options={options}
            onUpdateStatus={this.onUpdateStatus}
          />
        </Section>
        <Section title="Statistics">
            {this.countTotalFeadback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeadback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
      </Container>
    )

  }

}


  

