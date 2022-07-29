
export const AUTH_STATE_NAME = "AUTH";

export interface AuthState{
    user:any;
    isLoggedIn:boolean
}

export const intialAuthState:AuthState = {
    user:null as any,
    isLoggedIn:false
}