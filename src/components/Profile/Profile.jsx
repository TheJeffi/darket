import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import css from  './Profile.module.css'


function Profile(props) {
   return (
    <div className='app-wrapper-content'>
      <ProfileInfo />
      <MyPosts posts={props.ProfilePage.posts} newPostText={props.ProfilePage.newPostText} dispatch={props.dispatch} updateNewPostText = {props.updateNewPostText}/>
    </div>
   )
}

export default Profile;