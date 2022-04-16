import css from './../Dialogs.module.css'



function Message(props) {
   return (
      <div className={css.dialog}>{props.message}</div>
   )
}

export default Message;