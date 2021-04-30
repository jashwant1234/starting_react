import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import './Posts.module.css';
export default class Posts extends Component {
  state = {
    posts: [],
  };
  postClickHandler = (id) => {
    this.setState({ selectedPostId: id });
  };
  componentDidMount() {
    axios.get("/posts").then((res) => {
      const posts = res.data.slice(0, 6);
      const updatedPosts = posts.map((post) => {
        return { ...post, author: "Jashwant" };
      });
      this.setState({ posts: updatedPosts });
      console.log(res);
    }).catch((err) => {alert("Network error")});
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
        //   {...this.props} passing the route data to childe components
          click={() => this.postClickHandler(post.id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}
