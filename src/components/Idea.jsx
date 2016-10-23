import React, { Component } from 'react';

const propTypes = {
  complete: React.PropTypes.boolean,
  setIdeaToCompleted: React.PropTypes.func,
};

class Idea extends Component {
  constructor(props) {
    super(props);
    this.toggleIdeaInfoBox = this.toggleIdeaInfoBox.bind(this);
  }
  toggleIdeaInfoBox() {
    const detailsBox = document.querySelector('.idea-info');
    if (detailsBox.style.display === "block") {
      detailsBox.style.display = "none";
    } else {
      detailsBox.style.display = "block";
    }
  }

  render() {

    return (
      <div id={this.props.uid} className="one-idea clearfix">
        <h2>{this.props.mainIdea}
          <button className="checkmark" onClick={this.setIdeaToCompleted}>&#10004;</button>
          <button className="details" onClick={this.toggleIdeaInfoBox}>+</button>
        </h2>
        <div className="idea-info" >
          <p>
            <em>website</em> {this.props.website}<br />
            <em>other info</em> {this.props.extraInfo}<br />
            <em>submitted by</em> {this.props.email}<br />
          </p>
        </div>
      </div>
    );
  }
}

export default Idea;

