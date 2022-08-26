import Post from "./Post";

const PostList = ({ posts, setPosts }) => {
  return posts.length < 1 ? (
    <div className="subContainer">
      <h3 data-testid="loading">Loading posts...</h3>
    </div>
  ) : (
    posts.map((post) => {
      return (
        <Post
          key={post.id}
          ID={post.id}
          userID={post.userId}
          title={post.title}
          body={post.body}
          posts={posts}
          setPosts={setPosts}
        ></Post>
      );
    })
  );
};

export default PostList;
