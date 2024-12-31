import React, { useState } from "react";

function PostModal({ isVisible, onClose, onAddPost }) {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = () => {
    onAddPost({ content, media, id: Date.now() });
    setContent("");
    setMedia(null);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>Share Your Secret</h2>
        <textarea
          placeholder="Write your secret..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textArea}
        />
        <input type="file" accept="image/*,video/*" onChange={(e) => setMedia(e.target.files[0])} style={styles.fileInput} />
        <div style={styles.actions}>
          <button onClick={handleSubmit}>Share</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  modal: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modalContent: { background: "white", padding: "20px", borderRadius: "10px", width: "400px", textAlign: "center" },
  textArea: { width: "100%", height: "100px", marginBottom: "10px" },
  fileInput: { marginBottom: "10px" },
  actions: { display: "flex", justifyContent: "space-around" },
};

export default PostModal;
