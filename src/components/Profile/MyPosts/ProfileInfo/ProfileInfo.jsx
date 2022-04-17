import css from  './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div>
      <div className = {css.profileBackground}>
        <img src="https://picfiles.alphacoders.com/305/305501.jpg"></img>
      </div>
      <div className={css.descriptionBlock}>
        <div>
          <img src="https://main-cdn.sbermegamarket.ru/hlr-system/449/328/079/813/202/6/600004299610b0.jpeg" />
          <h3>Богдан Серяков</h3>
          <p>О себе: тексттекст</p>
          <p>Увлечения: тексттекст</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;