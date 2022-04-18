import css from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';


function Dialogs(props) {

   let state = props.dialogsPage;
   let addMessage = () => {
      props.addMessage();
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      props.updateNewMessageText(text);
   }

   let DialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

   let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>)

   let newMessageText = state.newMessageText;
   return (
      <div className={css.dialogs}>
         <div className={css.dialogsItems}>
            {DialogsElements}
         </div>
         <div className={css.messages}>
            {messagesElements}
            <div>
               <textarea value={newMessageText} onChange={onMessageChange} placeholder="Введите сообщение.." />
               <button onClick={addMessage}>Отправить</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;