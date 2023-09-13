import React, { useState } from "react";
import "./AddComent.css";
import SendIcon from "@mui/icons-material/Send";
import user4 from "../../assets/user4.png";

const AddComent = ({ handleComments, like, setLike, handleReplies }) => {
  const [newComent, setNewComent] = useState("");
  const [repky, setReply] = useState([]);
  const handleSubmit = (parentIndex = null) => {
    if (newComent.trim() !== "") {
      const commentData = {
        img: user4,
        name: "John",
        content: newComent,
      };

      handleComments(commentData, parentIndex);

      console.log(newComent, "what a comment");
      setNewComent("");
      const newLike = [...like, 0];
      setLike(newLike);
    }
  };

  return (
    <div className="comment_card">
      <div className="input_wrapper">
        <input
          className="comment_input"
          type="text"
          placeholder="Write your comment"
          value={newComent}
          onChange={(e) => setNewComent(e.target.value)}
        />
        <SendIcon className="send_icon" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddComent;
