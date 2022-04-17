import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import css from  './Profile.module.css'


function Profile(props) {
   return (
    <div className='app-wrapper-content'>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
   )
}

export default Profile;