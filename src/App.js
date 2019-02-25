import React from 'react';
import index from './index.css';

class App extends React.Component {
  onButtonClick = () => {
    console.log('clicked');
  };
  render() {
    return (
      <div className="ui center aligned container">
        <div className="title">Random Quote Generator</div>
        <div className="ui section divider" />
        <button className="massive blue ui button" onClick={this.onButtonClick}>
          Get a Quote!
        </button>
      </div>
    );
  }
}

export default App;
