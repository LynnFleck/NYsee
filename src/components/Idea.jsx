import React, { Component } from 'react';

class Idea extends Component {
  render() {
    return (
      <div id="one-idea">
        <h1>This is JUST ONE IDEA</h1>
        <div className="idea-description">
          This is the idea right here, it might be several lines long and have a lot of info
        </div>
        // ONLY if there is data
        <div>
          Category | Price | Timeframe
        </div>
        // ONLY if there is data
        <div>
          Website
        </div>
        <div>
          Extra Information
        </div>
        <div>
          Comments from other users
        </div>
        <button className="like-button">Like</button>
        <div id="numberOfLikes">
          00
        </div>
      </div>
      )
  }
}

export default Idea;
