import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div className={s.content}>

      <div>
        <img src="https://picfiles.alphacoders.com/310/310953.jpg" ali="image" />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts gyver={"super"} />

    </div>
  )
}
export default Profile;