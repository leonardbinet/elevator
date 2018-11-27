
import { func } from 'prop-types';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { prestatairesListSelector } from '../../../../redux/selectors/prestatairesSelectors'
import { fetchPrestataires } from '../../../../redux/modules/prestataires'

const mapStateToProps = (state) => ({
  prestataires: prestatairesListSelector(state),
})

const mapDispatchToProps = {
  fetchPrestataires,
}

class PrestatairesList extends PureComponent {
  static propTypes = {
    fetchPrestataires: func.isRequired,
  };

  componentWillMount() {
    const { prestataires } = this.props;
    if (!prestataires || !prestataires.length) {
      this.props.fetchPrestataires();
    }
  }

  renderQuestionCategory(category) {
    return (
      <div className="col-md-4" key={category.name}>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <br />
        <div className="articles">
          {category.articles.map((article) => {
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
    const { prestataires } = this.props;
    return (
      <section id="questions">
        <div className="container">
          <div className="row">
            {prestataires.map((prestataire) => this.renderQuestion(prestataire))}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrestatairesList);
