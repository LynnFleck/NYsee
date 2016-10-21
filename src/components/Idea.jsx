import React, { Component } from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div id={this.props.uid} className="one-idea">
        <button id="checkmark" onClick={this.handleDeleteClick}>&#10003;</button>
        <h2>{this.props.mainIdea}</h2>
          <p>
            <em>website</em> {this.props.website}<br />
            <em>other info</em> {this.props.extraInfo}<br />
            <em>submitted by</em> {this.props.email}<br />
          </p>
      </div>
      );
  }
}

export default Idea;

