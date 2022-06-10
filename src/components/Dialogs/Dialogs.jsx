import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../redux/message-reducer';



const Dialogs = (props) => {
  let state = props.store.getState().messagePage;

  let DialogElement = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
  let MessageElement = state.messagesData.map(m => <DialogMessage message={m.message} />)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClisk = () => {
    props.store.dispatch(sendMessageCreator())

  }
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))

  }
  return (

    <div className={s.content}>
      <div className={s.peoples}>
        {DialogElement}

      </div>
      <div className={s.messages}>
        <div>{MessageElement}</div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter you message"></textarea></div>
          <div><button onClick={onSendMessageClisk}>Send</button></div>
        </div>

      </div>

    </div>
  )
}
export default Dialogs;