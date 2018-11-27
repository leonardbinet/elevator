import React, { Component, Fragment } from 'react';

import { NavBar } from '../../common/components/navbar';

import { QuestionsHeader } from '../../common/components/headers';
import { QuestionsList } from '../../common/components/questions/questionsList'

require('../../../style/custom.css');


class QuestionsView extends Component {
  render() {
    return (
      <Fragment>
        <NavBar {...this.props} />
        <QuestionsHeader />
        <QuestionsList />
      </Fragment>
    );
  }
}

export default QuestionsView;
