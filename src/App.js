import React from 'react';
import index from './index.css';
import Axios from 'axios';

class App extends React.Component {
  getQuote = async () => {
    try {
      const response = await Axios.get(
        'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="ui center aligned container">
        <div className="title">Random Quote Generator</div>
        <div className="ui section divider" />
        <button className="massive blue ui button" onClick={this.getQuote}>
          Get a Quote!
        </button>
      </div>
    );
  }
}

export default App;
