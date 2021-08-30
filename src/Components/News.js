import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <h2>This is my news Component</h2>
        <NewsItem />
      </div>
    );
  }
}

export default News;
