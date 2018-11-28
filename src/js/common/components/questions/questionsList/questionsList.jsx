
import { func } from 'prop-types';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { questionsListSelector } from '../../../../redux/selectors/questionsSelectors'
import { receiveQuestions } from '../../../../redux/modules/questions'

import { questionsList } from '../../../../mock/questionsMock'

const mapStateToProps = (state) => ({
  questions: questionsListSelector(state),
})

const mapDispatchToProps = {
  receiveQuestions,
}

class QuestionsList extends PureComponent {
  static propTypes = {
    receiveQuestions: func.isRequired,
  };

  componentWillMount() {
    const { questions } = this.props;
    if (!questions || !questions.length) {
      // mock call
      this.props.receiveQuestions(questionsList);
    }
  }

  renderQuestionCategory(category) {

    return (
      <div className="col-md-4" key={category.name}>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <br />
        <div className="articles">
          {category.questions && category.questions.map((article) => {
            return this.renderArticle(article);
          })}
        </div>
      </div>
    );
  }

  renderArticle(article) {
    const url = `/articles/${article.slug}`;
    return (
      <div key={article.slug}>
        <a className="btn btn-default" href={url} role="button">
          {article.shortTitle}
          {' '}
»
        </a>
      </div>
    );
  }

  render() {
    const { questions } = this.props;
    return (
      <section id="questions">
        <div className="container">
          <div className="row">
            {questions.map((questionCategory) => this.renderQuestionCategory(questionCategory))}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);
