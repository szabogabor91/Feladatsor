import axios from "axios";
import { useState } from "react";
import PostForm from "./PostForm";

const Post = ({ ID, userID, title, body, posts, setPosts }) => {
  const [isEdited, setIsEdted] = useState(false);

  const deletePostFromPosts = (postID) => {
    setPosts(
      posts.filter((post) => {
        return post.id !== postID;
      })
    );
  };

  const updatePostInPosts = (postID, postTitle, postBody) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postID) {
          return { ...post, title: postTitle, body: postBody };
        }

        return post;
      })
    );
  };

  const deletePost = async (postID) => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/" + postID
      );
      console.log(response);
      deletePostFromPosts(postID);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (postID, posterUserID, postTitle, postBody) => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/" + postID,
        { id: postID, userId: posterUserID, title: postTitle, body: postBody }
      );
      console.log(response);
      updatePostInPosts(postID, postTitle, postBody);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="postCard">
        <h3 className="postTitle">{title}</h3>
        <div className="postBody">{body}</div>
        <button
          className="btn btn-lg btn-primary"
          style={{ marginRight: "2cm" }}
          onClick={() => setIsEdted(!isEdited)}
        >
          Edit
        </button>
        <button
          className="btn btn-lg btn-primary"
          onClick={() => deletePost(ID)}
        >
          Delete
        </button>
      </div>
      {isEdited && (
        <PostForm
          postMethod={updatePost}
          formType="Edit post"
          ID={ID}
          userID={userID}
        />
      )}
    </>
  );
};

export default Post;
