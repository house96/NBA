import React, { Component } from 'react'
import axios from 'axios'

import SliderTemlates from './slider_templates'

export default class NewsSlider extends Component {
  state = {
    news: []
  }
  componentWillMount() {
    axios
      .get(
        `http://localhost:3004/articles?_start=${this.props.start}&_end=${
          this.props.amount
        }`
      )
      .then(res => this.setState({ news: res.data }))
  }

  render() {
    return (
      <SliderTemlates
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    )
  }
}
