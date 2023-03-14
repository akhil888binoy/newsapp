import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page:1,

    }
  }
  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})

  }
  handleNextClick= async ()=>{
    console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }else{
      let url= `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles
      })
      
    }
    

  }
  handlePrevClick= async ()=>{
    console.log("previous");
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1> News App-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return (
              <div className="col-md-4 mb-3" key={element.url}>
                <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl= {element.url}></NewsItem>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
  
}
