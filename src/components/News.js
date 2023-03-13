import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2> News App-Top Headlines</h2>
            <div className="col-md-4">
                <NewsItem title="my title" description="my description" imageUrl="" ></NewsItem>
            </div>
            <div className="col-md-4">
                <NewsItem title="my title" description="my description"></NewsItem>
            </div>
            <div className="col-md-4">
                <NewsItem title="my title" description="my description"></NewsItem>
            </div>
            <div className="col-md-4">
                <NewsItem title="my title" description="my description"></NewsItem>
            </div>
            <div className="col-md-4">
                <NewsItem title="my title" description="my description"></NewsItem>
            </div>
      </div>
    )
}
}

export default News