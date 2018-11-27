import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LazyLoading from './common/components/LazyLoading';

const HomeRouteHandler = LazyLoading(() => import('./views/home'));
const ArticlesRouteHandler = LazyLoading(() => import('./views/articles'));
const PrestatairesRouteHandler = LazyLoading(() => import('./views/prestataires'));
const QuestionsRouteHandler = LazyLoading(() => import('./views/questions'));

module.exports = (
  <Switch>
    <Route exact path="/" component={HomeRouteHandler} />
    <Route path="/articles" component={ArticlesRouteHandler} />
    <Route path="/prestataires" component={PrestatairesRouteHandler} />
    <Route path="/questions" component={QuestionsRouteHandler} />
  </Switch>
);
