import React, { Component } from 'react';
import request from 'superagent';
import firebase from '../../firebase.config.js';
import NewIdea from './NewIdea.jsx';
import IdeaList from './IdeaList.jsx';

class Dashboard extends Component {
   constructor(props) {
    super(props);
    this.state = {
      posts: [],
      mainIdea: '',
      website: '',
      extraInfo: '',
    };
    this.httpGetPosts = this.httpGetPosts.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://nysee-d8e7f.firebaseio.com/ideas.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   email: individualPostData.email,
                   mainIdea: individualPostData.mainIdea,
                   uid: individualPostData.uid,
                   website: individualPostData.website,
                   extraInfo: individualPostData.extraInfo,
                   dateSubmitted: individualPostData.dateSubmitted,
                 };
               });
             }
             this.setState({ posts });
           });
  }

  render() {
    return (
      <div>
        <NewIdea
          httpGetPosts={this.httpGetPosts}
        />
        <IdeaList
          posts={this.state.posts}
        />
      </div>
      );
  }
}

export default Dashboard;
