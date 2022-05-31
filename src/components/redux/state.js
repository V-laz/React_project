
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
        { id: 6, message: "bngj" }
      ],
    }
  },

  _callSubscriber() {
    console.log('state changed');

  },
  getState() {

    return this._state;
  },

  addPost() {

    let newsPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 9
    };
    this._state.profilePage.newPost.push(newsPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

}
export default store;
