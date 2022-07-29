import { createReducer, on } from "@ngrx/store";
import { logout, signinSuccess, signupSuccess } from "./auth.actions";
import { AuthState, intialAuthState } from "./auth.state";

const onUserGetsAuthenticated = (state:AuthState,action:ReturnType<typeof signupSuccess>):AuthState => {
    return { ...state, user:action.user, isLoggedIn:true };
} 

const onLogout =  (state:AuthState,action:ReturnType<typeof logout>):AuthState => {
    return { ...state, user:null, isLoggedIn:false };
}

export const authReducer = createReducer(
    intialAuthState,
    on(signinSuccess,signupSuccess, onUserGetsAuthenticated),
    on(logout, onLogout)
)

