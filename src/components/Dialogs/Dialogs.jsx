import css from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


function Dialogs(props) {




   let addMessage = () => {
      let action = addMessageActionCreator();
      props.dispatch(action);
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      let action = updateNewMessageTextActionCreator(text);
      props.dispatch(action);
   }

   let DialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElements = props.state.messages.map(message => <Message message={message.message} />)
   return (
      <div className={css.dialogs}>
         <div className={css.dialogsItems}>
            {DialogsElements}
         </div>
         <div className={css.messages}>
            {messagesElements}
            <div>
               <textarea value={props.newMessageText} onChange={onMessageChange} placeholder="Введите сообщение.." />
               <button onClick={addMessage}>Отправить</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;