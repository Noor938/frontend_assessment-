import React from "react";
import "./CommentSection.css";
import { useState } from "react";
import { comment_data } from "../../dummy";
import AddComent from "../AddComment/AddComent";
import ReplyComment from "../ReplyComment/ReplyComment";

const CommentSection = () => {
  const [coment, setComent] = useState(comment_data);
  const [like, setLike] = useState(Array(comment_data.length).fill(0));
  const handleComments = (newComment, parentIndex) => {
    const updatedComments = [...coment];

    if (parentIndex !== null && updatedComments[parentIndex]) {
      // If parentIndex is provided, add the newComment to the reply array of the comment at that index
      updatedComments[parentIndex].reply.push(newComment);
    } else {
      // Otherwise, just add the newComment to the top-level comments
      updatedComments.push(newComment);
    }
    setComent(updatedComments);
  };

  return (
    <div className="comment_wrapper">
      {coment.map((items, index) => (
        <div className="comment_card" key={index}>
          <div className="content_wrappper">
            <div>
              <img src={items.img} alt="" />
            </div>
            <div className="comment_bio_wrapper">
              <span className="name">{items.name}</span>
              <p>{items.content}</p>
              <ReplyComment like={like} setLike={setLike} index={index} coment={coment} setComent={setComent} />
            </div>
          </div>
        </div>
      ))}
      <AddComent
        handleComments={handleComments}
        like={like}
        setLike={setLike}
      />
    </div>
  );
};

export default CommentSection;
