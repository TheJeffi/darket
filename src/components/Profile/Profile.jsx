import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import css from  './Profile.module.css'


function Profile(props) {
  debugger;
   return (
    <div className='app-wrapper-content'>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
   )
}

export default Profile;