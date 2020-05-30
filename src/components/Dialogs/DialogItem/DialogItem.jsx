import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {								//name of user in field
	return (
		<div className={s.dialog +' '+ s.active}>
			<NavLink to={'/dialogs/' + props.id} activeClassName = {s.active}>{props.name}</NavLink>
		</div>
		)
}

export default DialogItem;