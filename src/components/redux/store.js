import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';


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


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);

  }
}


export default store;
