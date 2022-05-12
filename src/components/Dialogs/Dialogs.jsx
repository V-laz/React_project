import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';



const Dialogs = (props) => {


  // let dialogsData = [
  //   { id: 1, name: 'Gyver' },
  //   { id: 2, name: "Vajs" },
  //   { id: 3, name: "Natasha" },
  //   { id: 4, name: "Lexa" },
  //   { id: 5, name: "Zaicr" },
  //   { id: 6, name: "Avtobus" }
  // ];

  // let messagesData = [
  //   { id: 1, message: 'hi' },
  //   { id: 2, message: "how are you" },
  //   { id: 4, message: "ypo" },
  //   { id: 5, message: "Zby" },
  //   { id: 6, message: "bngj" }
  // ];

  let DialogElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
  let MessageElement = props.messagesData.map(m => <DialogMessage message={m.message} />)



  return (
    <div className={s.content}>
      <div className={s.peoples}>
        {DialogElement}

      </div>
      <div className={s.messages}>
        {MessageElement}

      </div>

    </div>
  )
}
export default Dialogs;