import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';



const App = (props) => {
	return (
		<BrowserRouter>
			<div className = 'app-wrapper grid'>
				<Header />
				<Navbar />
				<div className = 'app-wrapper-content'>
					<Route path = "/dialogs" render = { () => <DialogsContainer />} />
					
					<Route path = "/profile" render = { () => <Profile />} />
					
					<Route path = "/news" component = {News} />
					<Route path = "/music" component = {Music} />
					<Route path = "/settings" component = {Settings} />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
