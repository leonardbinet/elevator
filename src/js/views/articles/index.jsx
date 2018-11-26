import React, { Component, Fragment } from 'react';

import { NavBar } from '../../common/components/navbar';

import { ArticlesHeader } from '../../common/components/headers';
import { ArticleList } from '../../common/components/articles/articleList'

require('../../../style/custom.css');


class ArticlesView extends Component {
  render() {
    return (
      <Fragment>
        <NavBar {...this.props} />
        <ArticlesHeader />
        <ArticleList />
      </Fragment>
    );
  }
}

export default ArticlesView;
