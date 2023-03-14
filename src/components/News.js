import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [
        {
          "source": {
            "id": "the-hill",
            "name": "The Hill"
          },
          "author": "Lauren Sforza",
          "title": "UK prime minister calls China a ‘systemic challenge’ to world order ahead of Biden meeting - The Hill",
          "description": "British Prime Minister Rishi Sunak said Sunday that China threatens the country’s economic interests and poses a “systemic challenge” for global order. “China represents the biggest state threat to our economic interests, for sure. And it’s a systemic challen…",
          "url": "https://thehill.com/policy/international/3897429-uk-prime-minister-calls-china-a-systemic-challenge-to-world-order-ahead-of-biden-meeting/",
          "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/10/SunakRishi-10242022.jpg?w=1280",
          "publishedAt": "2023-03-13T14:30:00Z",
          "content": "Skip to content\r\nBritish Prime Minister Rishi Sunak said Sunday that China threatens the country’s economic interests and poses a “systemic challenge” for global order.\r\n“China represents the biggest… [+2170 chars]"
        },
        {
          "source": {
          "id": "the-verge",
          "name": "The Verge"
          },
          "author": "James Vincent, Jon Porter",
          "title": "Samsung caught faking zoom photos of the Moon - The Verge",
          "description": "A Reddit post has revealed just how much post-processing the Galaxy S23’s camera applies when it detects it’s taking a photo of the Moon, inserting extra detail that isn’t present in reality.",
          "url": "https://www.theverge.com/2023/3/13/23637401/samsung-fake-moon-photos-ai-galaxy-s21-s23-ultra",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/-B56-pAq80Llm4zMVYQPa5UT6D4=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24500739/bXJOZgI.jpg",
          "publishedAt": "2023-03-13T14:16:35Z",
          "content": "Samsung caught faking zoom photos of the Moon\r\nSamsung caught faking zoom photos of the Moon\r\n / A viral Reddit post has revealed just how much processing the companys cameras apply to photos of the … [+6965 chars]"
          },
          {
            "source": {
            "id": null,
            "name": "CBS Sports"
            },
            "author": null,
            "title": "NCAA Tournament 2023 bracket: Computer simulation reveals surprising upsets, March Madness picks, sleepers - CBS Sports",
            "description": "When does the March Madness 2023 schedule start? The 2023 March Madness bracket begins Thursday with Round 1",
            "url": "https://www.cbssports.com/college-basketball/news/ncaa-tournament-2023-bracket-computer-simulation-reveals-surprising-upsets-march-madness-picks-sleepers/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/10/bc0b9e4e-a59a-4f88-9b87-d2a54b707434/thumbnail/1200x675/a7f9b952b1e52b54af2dbf20bf5de02b/adama-sanogo-usatsi.jpg",
            "publishedAt": "2023-03-13T14:11:53Z",
            "content": "The 2023 NCAA Tournament bracket has officially been announced, and several teams in the field of 68 will be on upset alert when first-round play begins. Alabama, Kansas, Houston, and Purdue were awa… [+4044 chars]"
            },
            {
              "source": {
              "id": "cnn",
              "name": "CNN"
              },
              "author": "Alli Rosenbloom",
              "title": "Brendan Fraser flooded with emotion as he wins best actor Oscar for 'The Whale' - CNN",
              "description": "Brendan Fraser tearfully accepted the Academy Award for best actor for his role in the film \"The Whale\" on Sunday.",
              "url": "https://www.cnn.com/2023/03/13/entertainment/brendan-fraser-oscars-best-actor/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230312162712-05-oscars-red-carpet-fashion-2023-brendan-fraser.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-03-13T13:31:00Z",
              "content": "Brendan Fraser tearfully accepted the Academy Award for best actor for his role in the film The Whale on Sunday. \r\nHe began his speech by thanking the films director Darren Aronofsky for throwing me … [+752 chars]"
              },
      ]
    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a8f8ad39a2fe4f12ae533499783c8674";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles : parsedData.articles})

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
      </div>
    );
  }
  
}
