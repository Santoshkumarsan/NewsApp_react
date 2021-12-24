import { getByTitle } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import Moment from 'moment';

export class News extends Component {
  articles = []
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e44f3b415c354c41833738ad894070af";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
    console.log(parsedata);
  }
  render() {
    return (
      <div className="container my-3">
        <h2>All Top News</h2>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <div className="card" style={{ width: "23rem" }}>
                  <img
                    src={element.urlToImage ? element.urlToImage : ""}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p>published on: {Moment(element.publishedAt).format('MMM DD YYYY')}</p>
                    <p className="card-text">{element.description}</p>
                    <a
                      href={element.url}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
