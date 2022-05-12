import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let newPost = [
  //   { id: 1, message: "hello gyver", likesCount:5},
  //   { id: 2, message: "hello natali", likesCount: 9 },
  //   { id: 3, message: "hello lexa", likesCount: 7 },
  //   { id: 4, message: "hello vajs", likesCount: 25 },
  //   { id: 5, message: "hello gjojoi", likesCount: 5 },
  //   { id: 6, message: "hello mumu", likesCount: 5 },
  // ]
  let PostMessages = props.newPost.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

 let addPost = () => {
   let text = newPostElement.current.value;
   alert(text)
  }

  return (

    <div className={s.postarea}>
      <h3>My post</h3>
      <div className={s.npost}>
        <div>
          <textarea ref={newPostElement} ></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>

        {/* <Post message={"hello gyver"} likesCant={5} />
        <Post message={"hello natali"} likesCant={9}/>                   this 1-part
        <Post message={"hello lexa"} likesCant={7}/>
        <Post message={"hello vajs"} likesCant={25} /> */}
        
        {/* <Post message={newPost[0].message} likesCant={newPost[0].likesCount} />
        <Post message={newPost[1].message} likesCant={newPost[1].likesCount} />
        <Post message={newPost[2].message} likesCant={newPost[2].likesCount} />            this part 2
        <Post message={newPost[3].message} likesCant={newPost[3].likesCount} />
        <Post message={newPost[4].message} likesCant={newPost[4].likesCount} /> */}

        {PostMessages}                                                                     {/* this part 3 */}

      </div>
    </div>


  )
}
export default MyPosts;