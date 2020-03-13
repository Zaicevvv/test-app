import React, { Component } from 'react';
import axios from 'axios';
import css from './NewsPage.module.css';

const url =
  'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=8d60cad2ce304b828561f98631293ff6';

export default class NewsPage extends Component {
  state = { news: [] };

  componentDidMount() {
    axios.get(url).then(res => this.setState({ news: res.data.articles }));
  }

  render() {
    const { news } = this.state;
    return (
      <div>
        <h2 className={css.newsTitle}>Fresh news</h2>
        <ul className={css.newsList}>
          {news.map(el => (
            <li key={el.source.id} className={css.newsListItem}>
              <h3>{el.title}</h3>
              <p>{el.content}</p>
              <img src={el.urlToImage} alt="newsImage" className={css.img} />
              <p> {el.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
