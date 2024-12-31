import React from "react";
import "../styles/Post.css";

function Post({ post, onEdit, onDelete }) {
  const handleEdit = () => onEdit(post);
  const handleDelete = () => onDelete(post.id);

  return (
    <div className="post">
      {post.content && <p className="post-content">{post.content}</p>}
      {post.media && (
        <img
          src={URL.createObjectURL(post.media)}
          alt="User Post"
          className="image"
        />
      )}
      <div className="actions">
        <button onClick={handleEdit} className="edit-button">
          Edit
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
