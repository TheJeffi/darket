import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import css from './Navbar.module.css';

function Navbar(props) {
    return (
        <nav className={css.nav}>
            <div className={css.item + ' ' + css.active}>
                <NavLink to='/profile' className={navData => navData.isActive ? css.active : css.item}>Мой профиль</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? css.active : css.item}>Сообщения</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/users' className={navData => navData.isActive ? css.active : css.item}>Пользователи</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='' className={navData => navData.isActive ? css.active : css.item}>Новости</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='' className={navData => navData.isActive ? css.active : css.item}>Музыка</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='' className={navData => navData.isActive ? css.active : css.item}>Настройки</NavLink>
            </div>

            {/* <div>
                <h3>Друзья</h3>
                <Friends state={ props.navbarElement }/>
            </div> */}
        </nav>
    )
}

export default Navbar;