import css from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';




function MyPosts(props) {

   let postsElement = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);


   let addPost = () => {
      debugger;
      let action = addPostActionCreator();
      props.dispatch(action);
   }


   let onPostChange = (e) => {
      let text = e.target.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   }
   return (
      <div className={css.postsBlock}>
         <h3>Мои посты</h3>
         <div>
            <div>
               <textarea value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
               <button onClick={addPost}>добавить пост</button>
            </div>
         </div>
         <div className={css.posts}>
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts;