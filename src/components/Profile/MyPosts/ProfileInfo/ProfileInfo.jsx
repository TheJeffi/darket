import Preloader from '../../../common/Preloader/Preloader';
import css from './ProfileInfo.module.css';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }
    return (
      <div>
        <div className={css.profileBackground}>
          <img src="https://picfiles.alphacoders.com/305/305501.jpg"></img>
        </div>
        <div className={css.descriptionBlock}>
          <div>
            <img src={props.profile.photos.large} />
            <h2>{props.profile.fullName}</h2>
            <h3>Статус: {props.profile.aboutMe}</h3>
            <p>Контакты:</p>
            <p>facebook: {props.profile.contacts.facebook}</p>
            <p>вконтакте: {props.profile.contacts.vk}</p>
            <p>twitter: {props.profile.contacts.twitter}</p>
            <p>github: {props.profile.contacts.github}</p>
          </div>
        </div>
      </div>
    )
}

export default ProfileInfo;