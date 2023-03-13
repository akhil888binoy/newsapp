import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        This is a News Component
            <NewsItem title="my title" description="my description"></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
      </div>
    )
}
}

export default News