import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import css from  './Profile.module.css'


function Profile(props) {
   return (
    <div className='app-wrapper-content'>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
   )
}

export default Profile;