import { AuthActions } from "./authReducer";

export type ThemeType = 'light' | 'dark';

export type ApplicationType = {
    theme: ThemeType;
}

export enum ApplicationTypes {
    SetTheme = 'APPLICATION_SET_THEME'
}

type ApplicationPayload = {
    [ApplicationTypes.SetTheme]: { theme: ThemeType; };
}

export type ApplicationActions = ActionMap<ApplicationPayload>[keyof ActionMap<ApplicationPayload>];

export const applicationReducer = (state: ApplicationType, action: ApplicationActions | AuthActions) => {
    switch (action.type) {
        case ApplicationTypes.SetTheme:
            return {
                ...state,
                theme: action.payload.theme
            };
        default: 
            return { ...state };
    }
};