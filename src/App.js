import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import axios from "axios";
import PostList from "./components/PostList";
import PostCreation from "./components/PostCreation";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Router>
        <div className="subContainer">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/postCreation">
                Write a post
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={<PostList posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="postCreation/*"
            element={<PostCreation posts={posts} setPosts={setPosts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
