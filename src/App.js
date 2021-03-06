import React from 'react';
import index from './index.css';
import Axios from 'axios';
import QuoteDetails from './QuoteDetails';

class App extends React.Component {
  state = {
    quote: '',
    author: ''
  };

  getQuote = async () => {
    try {
      const response = await Axios.get(
        'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
      );
      this.setState({
        quote: response.data.quoteText,
        author: response.data.quoteAuthor
      });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="ui center aligned container">
        <div className="ui header title">Random Quote Generator</div>
        <div className="ui section divider" />
        <button className="massive blue ui button" onClick={this.getQuote}>
          Get a Quote!
        </button>
        <QuoteDetails quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }
}

export default App;
