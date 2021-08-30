//rce
//This component is used in news.js

import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl } = this.props;
    return (
      <div className="my-3">
        <div classNameName="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
