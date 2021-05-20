import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import diff from 'deep-diff';
import { AuthActions, authReducer, AuthType } from './Reducers/authReducer';
import { ApplicationActions, applicationReducer, ApplicationType } from './Reducers/applicationReducer';

export type StateType = {
	auth: AuthType;
	application: ApplicationType;
}

const localStateItem = localStorage.getItem('state');

const initialState: StateType = {
	auth: {
		isSignedIn: false
	},
	application: {
		theme: 'dark'
	}
};

const storedState: StateType = localStateItem ? JSON.parse(localStateItem) : initialState;

const differences = diff.diff(storedState, initialState);

if (differences) {
	differences.forEach(difference => {
		if (difference.kind === 'N' || difference.kind === 'D') {
			diff.applyChange(storedState, initialState, difference);
		}
	});
}

const AppContext = createContext<{
	state: StateType;
	dispatch: Dispatch<AuthActions | ApplicationActions>;
}>({
	state: storedState,
	dispatch: () => null
});

const mainReducer = ({ auth, application }: StateType, action: AuthActions | ApplicationActions) => ({
	auth: authReducer(auth, action),
	application: applicationReducer(application, action)
});

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, storedState);

	useEffect(() => {
		localStorage.setItem('state', JSON.stringify(state));
	}, [state]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
};

export { AppProvider, AppContext };