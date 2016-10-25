import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  setComplete: React.PropTypes.func,
  httpGetPosts: React.PropTypes.func,
};

class Idea extends Component {
  constructor(props) {
    super(props);
    this.clickToShowInfo = this.clickToShowInfo.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  clickToShowInfo() {
    const detailsBox = document.getElementById(this.props.id);
    if (detailsBox.style.display === "block") {
      detailsBox.style.display = "none";
    } else {
      detailsBox.style.display = "block";
    };
  }

  handleCompleteClick() {
    let checkComplete;
    if (this.props.complete === false) {
      checkComplete = true;
    } else {
      checkComplete = false;
    }
    request.patch(`https://nysee-d8e7f.firebaseio.com/ideas/${this.props.id}.json`)
       .send({ complete: checkComplete })
       .end((err, res) => {
       });
    this.httpGetPosts;
    console.log('updated')


  }

  render() {

    return (
      <div id={this.props.uid} className="one-idea clearfix">
        <h2>{this.props.mainIdea}
          <input type="checkbox" className="checkmark" onClick={this.handleCompleteClick} defaultChecked={this.props.complete} />
          <button className="details" onClick={this.clickToShowInfo}>details</button>
        </h2>
        <div id={this.props.id} className="idea-info" >
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

Idea.propTypes = propTypes;

export default Idea;

