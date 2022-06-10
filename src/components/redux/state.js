import profileReducer from './profile-reducer';
import messageReducer from './message-reducer'; 
// let rerenderEntireTree = () => {
//   console.log('state changed')
// }

// let state = {

//   profilePage: {
//     newPost: [
//       { id: 1, message: "hello gyver", likesCount: 5 },
//       { id: 2, message: "hello natali", likesCount: 9 },

//     ],
//     newPostText: ''
//   },
//   messagePage: {

//     dialogsData: [
//       { id: 1, name: 'Gyver' },
//       { id: 2, name: "Vajs" },
//       { id: 3, name: "Natasha" },
//       { id: 4, name: "Lexa" },
//       { id: 5, name: "Zaicr" },
//       { id: 6, name: "Avtobus" }
//     ],

//     messagesData: [
//       { id: 1, message: 'hi' },
//       { id: 2, message: "how are you" },
//       { id: 4, message: "ypo" },
//       { id: 5, message: "Zby" },
//       { id: 6, message: "bngj" }
//     ],
//   }
// }
// export const addPost = () => {
//   let newsPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 9
//   };
//   state.profilePage.newPost.push(newsPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);

// }
// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);

// }
// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }
// export default state;
// const ADD_POST='ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {

    profilePage: {
      newPost: [
        { id: 1, message: "hello gyver", likesCount: 5 },
        { id: 2, message: "hello natali", likesCount: 9 },

      ],
      newPostText: ''
    },
    messagePage: {

      dialogsData: [
        { id: 1, name: 'Gyver' },
        { id: 2, name: "Vajs" },
        { id: 3, name: "Natasha" },
        { id: 4, name: "Lexa" },
        { id: 5, name: "Zaicr" },
        { id: 6, name: "Avtobus" }
      ],

      messagesData: [
        { id: 1, message: 'hi' },
        { id: 2, message: "how are you" },
        { id: 4, message: "ypo" },
        { id: 5, message: "Zby" },
        { id: 6, message: "yo man" }
      ],
      newMessageBody: ""
    }
  },

  _callSubscriber() {
    console.log('state changed');

  },
  getState() {

    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // _addPost() {

  //   let newsPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 9
  //   };
  //   this._state.profilePage.newPost.push(newsPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // _updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagePage = messageReducer(this._state.messagePage, action);
      this._callSubscriber(this._state);
      
    }
  }

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// }
// export const addPostActionCreator = () => ({type: ADD_POST })
// export const updateNewPostTextActionCreator = (text) =>
//  ({type: UPDATE_NEW_POST_TEXT, newText: text})

// export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) =>
//   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default store;
