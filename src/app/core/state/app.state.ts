import { AuthState, AUTH_STATE_NAME } from "src/app/features/auth/state";

export interface AppState{
    [AUTH_STATE_NAME]: AuthState
}