import React from 'react';

class QuoteDetails extends React.Component {
  render() {
    const { quote, author } = this.props;
    return (
      quote !== '' && (
        <div>
          <div className="ui center aligned card container">
            <div className="content">
              <div className="center aligned header">{author}</div>
              <div className="center aligned description">
                <p>{quote}</p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default QuoteDetails;
