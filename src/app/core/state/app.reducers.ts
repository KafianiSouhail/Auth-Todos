import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AUTH_STATE_NAME } from "src/app/features/auth/state";
import { AppState } from "./app.state";

export const appReducers:ActionReducerMap<AppState> = {
    [AUTH_STATE_NAME]: authReducer
}