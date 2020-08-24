import preloader from './../../../assets/images/Rolling-1s-200px.svg';
import React from 'react';
import s from '../../Users/users.module.css';

let Preloader = (props) => {
	return <div>
		<img src={preloader} className = {s.preloader}/>
	</div>
}

export default Preloader;