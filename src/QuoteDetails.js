import React from 'react';

class QuoteDetails extends React.Component {
  render() {
    const { quote, author } = this.props;
    return (
      quote !== '' && (
        <div className="ui raised very padded text container segment">
          <div className="content">
            <div className="center aligned description">
              <p>
                <i className="fas fa-quote-left" />
                {quote}
                <i className="fas fa-quote-right" />
              </p>
              <div className="center aligned header">{author}</div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default QuoteDetails;
