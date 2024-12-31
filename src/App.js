import React, { useState } from "react";
import Header from "./components/Header";
import PostModal from "./components/PostModal";
import Feed from "./components/Feed";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";

function App() {
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAddPost = (newPost) => setPosts([newPost, ...posts]);
  const handleEditPost = (updatedPost) =>
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  const handleDeletePost = (id) => setPosts(posts.filter((post) => post.id !== id));

  return (
    <AuthProvider>
      <Router>
        <Header onShare={() => setModalVisible(true)} />
        <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div>
                <PostModal
                  isVisible={isModalVisible}
                  onClose={() => setModalVisible(false)}
                  onAddPost={handleAddPost}
                />
                <Feed
                  posts={posts}
                  onEdit={handleEditPost}
                  onDelete={handleDeletePost}
                />
              </div>
            }
          />

          {/* User Profile Route */}
          <Route path="/profile" element={<UserProfile />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
