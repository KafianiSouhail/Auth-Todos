import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthState, AUTH_STATE_NAME } from "./auth.state"

const authStateSelector = createFeatureSelector<AuthState>(AUTH_STATE_NAME);
const selectorFactory = (cb:(state:AuthState)=>any) => createSelector(authStateSelector,cb);
export const selectUser = selectorFactory(state => state.user);
export const selectIsLoggedIn = selectorFactory(state => state.isLoggedIn);