import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import Singleline from './renderer/Singleline';

export default class QuestionList extends Component {

  renderQuestion(question) {
    return <div>{question.Text}</div>;
  }

  render() {
    return (
      <div>
        {this.props.questions.map((question) => {
          return this.renderQuestion(question);
        })}
      </div>
    );
  }
}
