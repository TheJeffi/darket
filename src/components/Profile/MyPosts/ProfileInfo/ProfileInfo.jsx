import css from  './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://picfiles.alphacoders.com/305/305501.jpg"></img>
      </div>
      <div className={css.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;