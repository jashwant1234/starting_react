import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: [],
  };

  componentDidUpdate() {
      if (this.props.id) {
        if( !this.state.post.id || this.props.id !== this.state.post.id)
          axios
          .get("/posts/" + this.props.id)
          .then((res) => {
              console.log(res);
              this.setState({ post: res.data });
        });
    }
  }

  postDeleteHandler = () =>{
        axios.delete("/posts/" + this.props.id)
        .then((res) => {
            console.log(res);
        });
  }
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if(this.props.id){
     post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.postDeleteHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
