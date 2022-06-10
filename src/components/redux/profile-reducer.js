const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
 
let initialState= {
  newPost: [
    { id: 1, message: "hello gyver", likesCount: 5 },
    { id: 2, message: "hello natali", likesCount: 9 },

  ],
  newPostText: ''
};

 
 const profileReducer = (state=initialState, action) => {
   
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
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;

