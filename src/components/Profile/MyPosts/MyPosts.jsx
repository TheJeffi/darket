import css from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {

   
   let posts = [
      { id: 1,message: "привет, как дела?", likesCount: 14},
       {id: 2, message: "hello world", likesCount: 12},
   ];

   let postsElement = posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);
   return (
      <div className={css.postsBlock}>
         <h3>Мои посты</h3>
         <div>
            <div>
               <textarea name="" id=""></textarea>
            </div>
            <div>
               <button>добавить пост</button>
            </div>
         </div>
         <div className={css.posts}>
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts;