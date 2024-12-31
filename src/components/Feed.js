import React from "react";
import Post from "./Post";

function Feed({ posts, onEdit, onDelete }) {
  return (
    <div style={styles.feed}>
      {posts.map((post) => (
        <Post key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

const styles = {
  feed: { padding: "0" },
};

export default Feed;
