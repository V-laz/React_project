import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/profile-reducer';

const MyPosts = (props) => {

  let PostMessages = props.newPost.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {

    props.dispatch( addPostActionCreator() );

  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
 
    props.dispatch(updateNewPostTextActionCreator(text) )
  }

  return (

    <div className={s.postarea}>
      <h3>My post</h3>
      <div className={s.npost}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>

        {PostMessages}

      </div>
    </div>


  )
}
export default MyPosts;