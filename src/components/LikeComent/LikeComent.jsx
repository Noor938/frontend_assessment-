import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './LikeComent.css'

const LikeComent = ({ like, setLike, index }) => {
  const [liked, setLiked] = useState()
  const handleLike = (index) => {
    console.log(index, "like index")
    const newLike = [...like]
    console.log(newLike, "this is newlike")
    if (liked) {
      console.log("unlike")
      newLike[index] -= 1;
      setLike(newLike)
      setLiked(false)
    }
    else {
      console.log("liked")
      setLiked(true)
      newLike[index] += 1
      setLike(newLike)
    }
  }
  return (
    <div className="icons_count">
      {
        console.log("liked")
      }
      <FavoriteIcon onClick={() => handleLike(index)}
        className={liked ? "red_like" : ""}
      />
      <span>{like[index]}</span>
    </div>
  )
}

export default LikeComent