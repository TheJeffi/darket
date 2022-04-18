import css from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';





function MyPosts(props) {

   let postsElement = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);


   let onAddPost = () => {
      props.addPost();
   }


   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
   }
   return (
      <div className={css.postsBlock}>
         <h3>Мои посты</h3>
         <div>
            <div>
               <textarea value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
               <button onClick={onAddPost}>добавить пост</button>
            </div>
         </div>
         <div className={css.posts}>
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts;