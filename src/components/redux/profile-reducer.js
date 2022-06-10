const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

 const profileReducer = (state, action) => {
   switch (action.type) {
     case ADD_POST:
       let newsPost = {
         id: 5,
         message: state.newPostText,
         likeCount: 9
       };
       state.newPost.push(newsPost);
       state.newPostText = '';
       return state;
     case UPDATE_NEW_POST_TEXT:
       state.newPostText = action.newText;
       return state;
       default:
         return state;
   }



  
//   if (action.type === 'ADD-POST') {
//     let newsPost = {
//       id: 5,
//       message: state.newPostText,
//       likeCount: 9
//     };
//     state.newPost.push(newsPost);
//     state.newPostText = '';
   
//   } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//     state.newPostText = action.newText;
    
//   } 

// return state;
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;

