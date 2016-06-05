import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';
import * as WorksheetActions from '../actions/worksheet';
import QuestionList from '../components/questions/QuestionList';

// @connect(state => { worksheet: state.worksheet })
class Worksheet extends Component {

  static readyOnActions(dispatch, params) {
    return Promise.all([
      dispatch(WorksheetActions.fetchWorksheetIfNeeded(params.id))
    ]);
  }

  componentDidMount() {
    Worksheet.readyOnActions(this.props.dispatch, this.props.params);
  }

  getWorksheet() {
    return this.props.worksheets[this.props.params.id];
  }

  renderQuestions(worksheet) {


    if (worksheet.readyState === WorksheetActions.WORKSHEET_INVALID ||
      worksheet.readyState === WorksheetActions.WORKSHEET_FETCHING) {
      return <p>Loading...</p>;
    }

    if (worksheet.readyState === WorksheetActions.WORKSHEET_FETCH_FAILED) {
      return <p>Failed to fetch worksheet</p>;
    }

    return <QuestionList questions={worksheet.json.question_json} />;
  }

  render() {
    const worksheet = this.getWorksheet();
    return (
      <div>
        <Helmet title={worksheet.json.name} />
        <PageHeader>{worksheet.json.name}</PageHeader>

        {this.renderQuestions(worksheet)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    worksheets: state.worksheets
  };
}

export default connect(mapStateToProps)(Worksheet);
