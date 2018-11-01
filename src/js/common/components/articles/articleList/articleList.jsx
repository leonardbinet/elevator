import React, { PureComponent } from "react";

class ArticleList extends PureComponent {
  renderCategory(category) {
    return (
      <div class="col-md-4">
        <h2>{category.nom}</h2>
        <p>{category.description}</p>
        <br />
        <div class="articles">
          {categor.articles.forEach(article => {
            return this.renderArticle(article);
          })}
        </div>
      </div>
    );
  }

  renderArticle(article) {
    const url = `/articles/${article.slug}`;
    return (
      <div>
        <a class="btn btn-default" href={url} role="button">
          {article.shortTitle} »
        </a>
      </div>
    );
  }

  render() {
    const { categories } = this.props;

    return (
      <section id="article">
        <div class="container">
          <div class="row">
            {categories.forEach(category => this.renderCategory(category))}
          </div>
        </div>
      </section>
    );
  }
}

export default ArticlesHeader;
