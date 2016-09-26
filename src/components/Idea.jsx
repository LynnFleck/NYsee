import React, { Component } from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={this.props.uid}>
        <blockquote>{this.props.mainIdea}
          <footer><samp>{this.props.website}</samp> |
            extra info: <samp>{this.props.extraInfo}</samp> |
            submitted by <samp>{this.props.email}</samp> |
            date submitted <samp>{this.props.dateSubmitted}</samp>
          </footer>
        </blockquote>
      </div>
      );
  }
}

export default Idea;

