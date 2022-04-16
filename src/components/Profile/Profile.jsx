import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import css from  './Profile.module.css'

function Profile() {
   return (
    <div className='app-wrapper-content'>
      <ProfileInfo />
      <MyPosts />
    </div>
   )
}

export default Profile;