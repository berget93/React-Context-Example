import { ApplicationActions } from "./applicationReducer";

export type AuthType = {
    isSignedIn: boolean;
}

export enum AuthTypes {
    SetIsSignedIn = 'AUTH_SET_IS_SIGNED_IN',
}

type AuthPayload = {
    [AuthTypes.SetIsSignedIn]: {
        isSignedIn: boolean;
    };
}

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const authReducer = (state: AuthType, action: AuthActions | ApplicationActions) => {
    switch (action.type) {
        case AuthTypes.SetIsSignedIn:
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn
            };
        default: 
            return { ...state }
    }
};
