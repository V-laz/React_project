import React from "react";
import s from './Post.module.css'

const Post =(props)=> {
return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=3dd2193f7afdc45fb3966061cff38112-4948500-images-thumbs&n=13" alt="ava" />
    {props.message}
      <div>
        <span>Like {props.likesCount}</span>
        
      </div>
    </div>

  )
}
export default Post;