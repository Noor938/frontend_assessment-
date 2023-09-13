import React, { useState } from 'react'
import LikeComent from '../LikeComent/LikeComent'
import SendIcon from "@mui/icons-material/Send";

const ReplyComment = ({ like, setLike, index, setComent, coment }) => {
  const [replyToggle, setReplyToggle] = useState(false)
  const handleReplyToggle = () => {
    setReplyToggle(prev => !prev)
  }
  const handleRemove = (index) => {
    const removeData = coment.filter((_, i) => i !== index);
    setComent(removeData);
  };
  return (
    <div>
      <div className="icon_reply_wrapper">
        <LikeComent like={like} setLike={setLike} index={index} />
        <span className='reply' onClick={handleReplyToggle}>Reply</span>
        <span className="remove" onClick={() => handleRemove(index)}>
          Remove
        </span>
      </div>
      {
        replyToggle && (
          <div className="input_wrapper">
            <input
              className="comment_input"
              type="text"
              placeholder="Write your comment"
            />
            <SendIcon className="send_icon" />
          </div>
        )
      }
    </div>

  )
}

export default ReplyComment