import Friend from "./Friend/Friend";
import css from "./Friends.module.css"

function Friends (props) {
    let friendElement = props.state.friends.map( friend => <Friend id={friend.id} name={friend.name} avatar={friend.avatar}/>);
   return (
      <div className={css.row}>
         {friendElement}
      </div>
   )
}

export default Friends;