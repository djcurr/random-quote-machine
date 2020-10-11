import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
const quotes = require('./quotes.json');



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
    <body className="text-center">
      <div id="quote-box" className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Generate a quote!</h1>
          <h1 id="text" className="lead">{this.state.text}</h1>
          <h2 id="author">-{this.state.author}</h2>
          <p className="lead">
            <button id="new-quote" onClick={this.generateNewQuote.bind(this)} className="btn btn-lg btn-primary">New Quote</button>
            <a id="tweet-quote" rel="noopener noreferrer" href={this.state.href} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>Tweet it!</a>
          </p>
        </main>
      </div>
    </body>
    );
  }
}

export default Quote;
