import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Fox News",
      title:
        "ESPN’s acting like it was scammed into broadcasting terrible Ohio HS football team vs. IMG Academy",
      description:
        "ESPN’s broadcast team was asking questions midway through the second quarter of today’s 58-0 thumping at the hands of IMG.",
      url: "https://www.foxnews.com/sports/espn-broadcasting-ohio-hs-football-team-img-academy",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2020/12/football-laces-istock.jpg",
      publishedAt: "2021-08-30T13:52:21.4314901Z",
      content:
        "Why was an Ohio online-only charter school thats not affiliated with the Ohio High School Athletic Association, and in existence since 2019, playing IMG Academy on ESPN Sunday afternoon from Tom Bens… [+2141 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: "BBC Sport",
      title: "'If it was fiction, you'd think it was unrealistic'",
      description:
        "BBC Sport tells how Carlos Tevez's and Javier Mascherano's deadline-day arrival at West Ham 15 years ago became one of football's most controversial deals.",
      url: "http://www.bbc.co.uk/sport/football/58382795",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17F9B/production/_120330289_gettyimages-71785006.jpg",
      publishedAt: "2021-08-30T12:52:26.6787773Z",
      content:
        "Carlos Tevez and Javier Mascherano signed for West Ham 15 years ago on Tuesday\r\nThe story began with tension and awkwardness, and ended in the sort of drama that would make Hollywood blush.\r\nOn 31 Au… [+5126 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Sam Marsden",
      title:
        "Lionel Messi's PSG debut becomes most-watched French football match in Spain",
      description:
        "Lionel Messi's debut with Paris Saint-Germain became the most-watched French football match in Spain, with over two million viewers tuning in.",
      url: "http://espn.go.com/soccer/paris-saint-germain--frapsg/story/4465426/lionel-messis-psg-debut-becomes-most-watched-french-football-match-in-spain",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0830%2Fr902449_1296x729_16%2D9.jpg",
      publishedAt: "2021-08-30T12:08:41Z",
      content:
        "Lionel Messi's debut with Paris Saint-Germain averaged over two million viewers in Spain, making it the most-watched French football game in the country ever.\r\nMessi, 34, finally made his first appea… [+1761 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "National Football League\n     \n        The 5 Best NFL MVP Bets\n       \n        The 5 Best NFL MVP Bets\n       \n        Don't know how to bet on the 2021 NFL MVP? Jason McIntyre is here to help, offering five great options to consider.\n       \n      10 mins ago",
      description:
        "Don't know how to bet on the 2021 NFL MVP? Jason McIntyre is here to help, offering five great options to consider.",
      url: "http://www.foxsports.com/stories/nfl/5-best-nfl-mvp-bets-baker-mayfield-dak-prescott-josh-allen-jason-mcintyre",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/08/1408/814/08.26.21_Ranking-NFL-MVP-Futures_16x9.jpg?ve=1&tl=1",
      publishedAt: "2021-08-29T14:22:24.6580394Z",
      content:
        "By Jason McIntyreFOX Sports Betting Analyst\r\nWeve ranked over/under win totals and Super Bowl futures, and now, it's time for preseason NFL MVP odds.\r\nThe most recent non-QB to win MVP was LaDainian … [+4393 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "National Football League\n     \n        Win $1 Million On NFL Week 1 With Super 6\n       \n        Win $1 Million On NFL Week 1 With Super 6\n       \n        Super 6 is kicking off the NFL season with its biggest prize ever. Here's how you can win $1 million absolutely for free – really.\n       \n      1 day ago",
      description:
        "Super 6 is kicking off the NFL season with its biggest prize ever. Here's how you can win $1 million absolutely for free – really.",
      url: "http://www.foxsports.com/stories/nfl/fox-super-6-nfl-week-1-how-to-win-1-million-for-free",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/08/1408/814/08.25.21_NFL_Super-6_Week-1_16x9.jpg?ve=1&tl=1",
      publishedAt: "2021-08-29T01:22:26.0004413Z",
      content:
        "By Jason McIntyreFOX Sports Betting Analyst\r\nThe summer is winding down, kids are getting back to school, the days are getting shorter. You know what that means: It's football season, and we're back … [+6199 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "College Football\n     \n        3 Best College Football Playoff Bets\n       \n        3 Best College Football Playoff Bets\n       \n        As the season kicks off, Sammy P looks to the future and which teams will make – or miss – the College Football Playoff.\n       \n      13 mins ago",
      description:
        "As the season kicks off, Sammy P looks to the future and which teams will make – or miss – the College Football Playoff.",
      url: "http://www.foxsports.com/stories/college-football/3-best-college-football-playoff-bets-week-0-kicks-off-ohio-state-oklahoma-oregon",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/08/1408/814/8.26.21_CFB-Playoff-Sleepers-you-should-bet_CFB-16x9.jpg?ve=1&tl=1",
      publishedAt: "2021-08-28T17:07:25.1791882Z",
      content:
        "By Sam PanayotovichFOX Sports Betting Analyst\r\nThe question arises at the beginning of every college football season, when we talk about college football national championship futures and College Foo… [+4111 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Adam SchefterESPN Senior Writer ",
      title:
        "Adam Schefter's fantasy football cheat sheet - Value picks and sleepers to target",
      description:
        "The cheat sheet Adam sends to his friends and family when they ask him for fantasy advice is once again being shared with you.",
      url: "http://espn.go.com/fantasy/football/insider/story/_/id/32076848/adam-schefter-fantasy-football-cheat-sheet-value-picks-sleepers-target",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0827%2Fr417726_2_1296x729_16%2D9.jpg",
      publishedAt: "2021-08-27T11:55:00Z",
      content:
        "For the past several years here at ESPN Fantasy Football, we have given you direct access to Adam Schefter's personal list of early-, mid- and late-round targets. Before being published here, this li… [+4029 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello there !!");
    this.state = {
      articles: this.articles,
    };
  }

  render() {
    return (
      <div className="container-fluid my-3">
        <h1
          style={{
            paddingTop: "20px",
            paddingBottom: "40px",
            textAlign: "center",
          }}
        >
          Top headlines for today
        </h1>

        <div className="row" style={{ paddingBottom: "50px" }}>
          <div className="col-md-4">
            <NewsItem
              title="tit 1"
              description="my des"
              imageurl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17F9B/production/_120330289_gettyimages-71785006.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="tit 2"
              description="my des"
              imageurl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17F9B/production/_120330289_gettyimages-71785006.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="tit 3" description="my des" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title="tit 4" description="my des" />
          </div>
          <div className="col-md-4">
            <NewsItem title="tit 5" description="my des" />
          </div>
          <div className="col-md-4">
            <NewsItem title="tit 6" description="my des" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;