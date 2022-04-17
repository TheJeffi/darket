import css from './Friend.module.css'

function Friend(props) {
   return (
      <div className={css.item}>
         <img src={props.avatar} alt="" />
         <h3>{props.name}</h3>
      </div>
   )
}

export default Friend;