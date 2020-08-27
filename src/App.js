import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {
	return (
		<BrowserRouter>
			<div className = 'app-wrapper grid'>
				<Header />
				<Navbar />
				<div className = 'app-wrapper-content'>
					<Route path = "/dialogs" render = { () => <DialogsContainer />} />
					
					<Route path = "/profile/:userId?" render = { () => <ProfileContainer />} />

					<Route path = "/users" render = { () => <UsersContainer />} />
					
					<Route path = "/news" component = {News} />
					<Route path = "/music" component = {Music} />
					<Route path = "/settings" component = {Settings} />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
