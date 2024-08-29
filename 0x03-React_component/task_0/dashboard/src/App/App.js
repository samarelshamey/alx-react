import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

class App extends Component {
render() {
return (
	<>
	<Notifications />
	<Header />
	<Login />
	<Footer />
	</>
);
}
}

export default App;
