
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState= {
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
};
const messageReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({ id: 7, message: body });
      return state;
    default:
      return state;

  };
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default messageReducer;
