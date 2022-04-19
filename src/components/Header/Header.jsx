import { NavLink } from "react-router-dom";
import css from "./Header.module.css"

function Header(props) {
   debugger;
   return (
<header className={css.header}>
    <img
        src='https://cdn.freelance.ru/img/portfolio/pics/00/3D/54/4019446.jpg?mt=5e1b3045'></img>
        <div className={css.loginBlock}>
           {props.isAuth ? props.login : <NavLink to='/login'>Войти</NavLink> }
        </div>
</header>
   )
}

export default Header;