import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { AuthTypes } from '../../Reducers/authReducer';

const Login: React.FC = () => {
	const { state, dispatch } = useContext(AppContext);

    const handleSignIn = () => {
        dispatch({ type: AuthTypes.SetIsSignedIn, payload: { isSignedIn: true } });
    };

    const handleSignOut = () => {
        dispatch({ type: AuthTypes.SetIsSignedIn, payload: { isSignedIn: false } });
    };

    return (
        <div className="Login">
            {!state.auth.isSignedIn && <button onClick={handleSignIn}>Sign in</button>}
            {state.auth.isSignedIn && <button onClick={handleSignOut}>Sign out</button>}
        </div>
    )
}

export default Login;