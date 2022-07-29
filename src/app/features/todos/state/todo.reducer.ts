import { createFeature, createReducer, on } from "@ngrx/store";
import { fetchTodosRequest, setTodos, setTodosLength, setTodosPage } from "./todo.actions";
import { todoAdapter } from "./todo.adapter";
import { intialTodosState, TodosState, TODO_STATE_NAME } from "./todo.state";

const onFetchTodosrequest = (state:TodosState,action:ReturnType<typeof fetchTodosRequest>): TodosState => {
    return { ...state, loadingTodos: true};
}

const onSetTodos = (state:TodosState,action:ReturnType<typeof setTodos>): TodosState => {
    return { ...todoAdapter.setAll(action.todos,state), loadingTodos: false};
}

const onSetLength = (state:TodosState,action:ReturnType<typeof setTodosLength>): TodosState => {
    return { ...state, length: action.length };
}

const onSetPage = (state:TodosState, action:ReturnType<typeof setTodosPage>): TodosState => {
    return { ...state, page: action.page };
}

export const todoreducer = createReducer(
    intialTodosState,
    on(setTodos,onSetTodos),
    on(fetchTodosRequest, onFetchTodosrequest),
    on(setTodosPage, onSetPage),
    on(setTodosLength, onSetLength)
);

export const todoFeature = createFeature({
    name: TODO_STATE_NAME,
    reducer: todoreducer
});