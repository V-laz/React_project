import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div className={s.content}>

      <div>
        <img src="https://picfiles.alphacoders.com/310/310953.jpg" alt="image" />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts newPost={props.profilePage.newPost}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText} />

    </div>
  )
}
export default Profile;