
import { func } from 'prop-types';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { categoriesSelector } from '../../../../redux/selectors/articlesSelectors'
import { fetchCategories } from '../../../../redux/modules/articles'

const mapStateToProps = (state) => ({
  categories: categoriesSelector(state),
})

const mapDispatchToProps = {
  fetchCategories,
}

class ArticleList extends PureComponent {
  static propTypes = {
    fetchCategories: func.isRequired,
  };

  componentWillMount() {
    const { categories } = this.props;
    if (!categories || !categories.length) {
      this.props.fetchCategories();
    }
  }

  renderCategory(category) {
    return (
      <div className="col-md-4" key={category.name}>
        <h2>{category.nom}</h2>
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
    const { categories } = this.props;
    return (
      <section id="article">
        <div className="container">
          <div className="row">
            {categories.map((category) => this.renderCategory(category))}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
