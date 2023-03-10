import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles : parsedData.articles})

  }
  handleNextClick= async ()=>{
    console.log("Previous");
    console.log("Next");
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page + 1
    })
    

  }
  handlePrevClick= async ()=>{
    console.log("Next");
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1
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
        <butto disabled ={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</butto>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
  
}
