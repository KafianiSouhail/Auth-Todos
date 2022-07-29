import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/classes";
import { AuthenticationResponse, SigninPyload, SignupPyload } from "../models/interfaces";

//AUTH ACTIONS PREFIX
const AUTH_ACTIONS_PREFIX:string='[AUTH]';

//SIGNIN
const SIGNIN_REQUEST_ACTION:string=`${AUTH_ACTIONS_PREFIX} signin request`;
const SIGNIN_SUCCESS_ACTION:string=`${AUTH_ACTIONS_PREFIX} signin success`;
export const signinRequest = createAction(SIGNIN_REQUEST_ACTION,props<{signinPyload:SigninPyload}>());
export const signinSuccess = createAction(SIGNIN_SUCCESS_ACTION,props<{user:User}>());

//SIGNUP
const SIGNUP_REQUEST_ACTION:string=`${AUTH_ACTIONS_PREFIX} signup request`;
const SIGNUP_SUCCESS_ACTION:string=`${AUTH_ACTIONS_PREFIX} signup success`;
export const signupRequest = createAction(SIGNUP_REQUEST_ACTION, props<{signupPyload:SignupPyload}>());
export const signupSuccess = createAction(SIGNUP_SUCCESS_ACTION, props<{user: User}>());

//LOGOUT
const LOGOUT_ACTION:string=`${AUTH_ACTIONS_PREFIX} logout`;
export const logout = createAction(LOGOUT_ACTION);

