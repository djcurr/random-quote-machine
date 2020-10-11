import React from 'react';
import './Quote.css';
const quotes = require('./quotes.json')


class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      author: '',
      href: ''
     };
  }

  componentDidMount() {
    this.generateNewQuote();
  }

  generateNewQuote() {
    const i = Math.floor(Math.random() * Math.floor(102));
    const tweetContent = (quotes[i].quote + "%20-" + quotes[i].author)
    const intent = "https://twitter.com/intent/tweet?text=" + tweetContent;
    this.setState({
      text: quotes[i].quote,
      author: quotes[i].author,
      href: intent
    });
  }


  render() {
    return (
      <div id="quote-box">
        <h1 id="text">Quote: {this.state.text}</h1>
        <h2 id="author">Author: {this.state.author}</h2>
        <button id="new-quote" onClick={this.generateNewQuote.bind(this)}>New Quote</button>
        <a id="tweet-quote" rel="noopener noreferrer" href={this.state.href} target="_blank">Tweet Quote</a>
      </div>
    );
  }
}

export default Quote;
