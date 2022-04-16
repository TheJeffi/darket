import css from './Post.module.css';

function Post(props) {
  return (
    <div className={css.item}>
      <img src="https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg" alt="аватар"/>
      <span>{props.message}</span>
      <div>
        <span>Лайк</span>{props.likesCount}
      </div>

    </div>
  )
}

export default Post;