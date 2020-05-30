import React from 'react';
import s from './header.module.css';

const Header = () => {
	return(
		<header className = {s.header}>
			<div className={s.logo}>
      	<img src={require ("./../../img/logo.png")} alt="logotype"/>
      </div> 
     </header>
		);
}

export default Header;