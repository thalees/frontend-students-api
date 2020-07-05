import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Student as StudentView,
  Book as BookView,
  Article as ArticleView,
  Course as CourseView,
  Podcast as PodcastView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/student/login" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={StudentView}
        exact
        layout={MinimalLayout}
        path="/student/login"
      />
      <RouteWithLayout
        component={BookView}
        exact
        layout={MainLayout}
        path="/books"
      />
      <RouteWithLayout
        component={ArticleView}
        exact
        layout={MainLayout}
        path="/articles"
      />
      <RouteWithLayout
        component={CourseView}
        exact
        layout={MainLayout}
        path="/courses"
      />
      <RouteWithLayout
        component={PodcastView}
        exact
        layout={MainLayout}
        path="/Podcasts"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
