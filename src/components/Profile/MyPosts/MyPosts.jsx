import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
   
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
        <Post message={"hello gyver"} likesCant={5} />
        <Post message={"hello natali"} likesCant={9}/>
        <Post message={"hello lexa"} likesCant={7}/>
        <Post message={"hello vajs"} likesCant={25} />
        

        </div>
      </div>


  )
}
export default MyPosts;