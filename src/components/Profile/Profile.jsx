import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div className={s.content}>

      <div>
        <img src="https://picfiles.alphacoders.com/310/310953.jpg" alt="img" />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts newPost={props.profilePage.newPost}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
        />

    </div>
  )
}
export default Profile;