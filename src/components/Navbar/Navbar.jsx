import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={css.nav}>
            <div className={css.item + ' ' + css.active}>
                <NavLink to='/profile' className = { navData => navData.isActive ? css.active : css.item }>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? css.active : css.item }>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='' className = { navData => navData.isActive ? css.active : css.item }>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='' className = { navData => navData.isActive ? css.active : css.item }>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='' className = { navData => navData.isActive ? css.active : css.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;