import React, { useState } from 'react'

const LikeButton = () => {

  let [isliked ,setIsLiked] = useState(false);
  let [clicks , setClicks] = useState(0);
      let toggleLike =() =>{
        setIsLiked(!isliked)
        setClicks(clicks+1)
      }
      let likeStyle={
        color:"red"
      }
  return (
    <div>
      <h4>My like Button</h4>
      <p>Likes: {clicks}</p>
        <p onClick={toggleLike}>
          {
          isliked ? 
          (<i style={likeStyle} className="fa-solid fa-heart"></i>):
          (<i className="fa-regular fa-heart"></i>)
          }
         
          </p>
    </div>
  )
}

export default LikeButton