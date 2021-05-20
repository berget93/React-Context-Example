import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../Login/Login';
import { AppContext } from '../../context';
import { ApplicationTypes } from '../../Reducers/applicationReducer';
import Button from '../Button/Button';

const App: React.FC = () => {
	const { state, dispatch } = useContext(AppContext);

	const handleToggleTheme = () => {
		dispatch({ type: ApplicationTypes.SetTheme, payload: { theme: state.application.theme === 'dark' ? 'light' : 'dark' } });
	};
	
	return (
		<div className="App">
			<header className={`App-header App-header-${state.application.theme}`}>
				<img src={logo} className="App-logo" alt="logo" />

				<Login />

				{state.auth.isSignedIn && <>
					<Button onClick={handleToggleTheme}>Toggle theme</Button>
				</>}
			</header>
		</div>
	);
}

export default App;
