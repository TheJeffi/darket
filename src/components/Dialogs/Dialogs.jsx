import css from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {

   let dialogs = [
      { id: 1, name: "Богдан" },
      { id: 2, name: "Ильсаф" },
      { id: 3, name: "Саша" },
      { id: 4, name: "Настя" }
   ];

   let messages = [
      { id: 1, message: "ку как дела" },
      { id: 2, message: "ку че делаешь" },
      { id: 3, message: "ку ку" },
   ];

   let DialogsElements = dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElements = messages
      .map(message => <Message message={message.message} />)

   return (
      <div className={css.dialogs}>
         <div className={css.dialogsItems}>
            {DialogsElements}
         </div>
         <div className={css.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;