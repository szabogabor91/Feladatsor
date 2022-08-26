import axios from "axios";
import PostForm from "./PostForm";

const PostCreation = ({ posts, setPosts }) => {
  const addPostToPosts = (postTitle, postBody) => {
    setPosts([
      ...posts,
      {
        title: postTitle,
        body: postBody
      }
    ]);
  };

  const postPost = async (postTitle, postBody) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        {
          title: postTitle,
          body: postBody
        }
      );
      console.log(response);
      addPostToPosts(postTitle, postBody);
    } catch (error) {
      console.log(error);
    }
  };

  return <PostForm postMethod={postPost} formType="Create post" />;
};

export default PostCreation;
