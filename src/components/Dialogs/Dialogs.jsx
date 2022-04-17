import css from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';






function Dialogs(props) {

   let DialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElements = props.state.messages.map(message => <Message message={message.message} />)
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