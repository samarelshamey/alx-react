import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'
import './App.css';

function App() {
	return (
		<>
			<Notifications /> {/* Add Notifications component before App */}
			<div className='App'>
				<Header /> {/* Use the Header component */}
				<div className='App-body'>
					<p>Login to access the full dashboard</p>
					<Login /> {/* Use the Login component */}
				</div>
				<Footer /> {/* Use the Footer component */}
			</div>
		</>
	);
}

export default App;