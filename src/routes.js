import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/home/home'
import Layout from './hoc/Layout/layout'
import NewsArticle from './components/Articles/News/Post/index'

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
        </Switch>
      </Layout>
    )
  }
}
