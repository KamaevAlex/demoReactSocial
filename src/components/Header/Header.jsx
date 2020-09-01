import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={require("./../../img/logo.png")} alt="logotype"/>
            <div className={s.loginBlock}>

                {props.isAuth ? props.login
                    :<NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
}

export default Header;