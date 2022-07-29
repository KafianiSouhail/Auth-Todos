import { createAction, props } from "@ngrx/store";
import { Page } from "src/app/core/models/interfaces";
import { Todo, TodoPyload } from "../models";

const TODO_ACTION_PREFIX = '[TODO]';

// Add todo
const ADD_TODO_REQUEST_ACTION = `${TODO_ACTION_PREFIX} add todo request`;
const ADD_TODO_SUCCESS_ACTION = `${TODO_ACTION_PREFIX} add todo success`;
export const addTodoRequest = createAction(ADD_TODO_REQUEST_ACTION, props<{todo:TodoPyload}>());
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS_ACTION);

// Fetch todos
const FETCH_TODOS_REQUEST_ACTION = `${TODO_ACTION_PREFIX} fetch todos request`;
export const fetchTodosRequest = createAction(FETCH_TODOS_REQUEST_ACTION, props<{shouldMatch:string}>());

// Set todos
const SET_TODOS_ACTION = `${TODO_ACTION_PREFIX} set todos`;
export const setTodos = createAction(SET_TODOS_ACTION, props<{todos:Todo[]}>());

// Pagination
const SET_LENGTH_ACTION = `${TODO_ACTION_PREFIX} set length of todos`;
const SET_PAGE_ACTION = `${TODO_ACTION_PREFIX} set page`;
export const setTodosLength = createAction(SET_LENGTH_ACTION, props<{length:number}>());
export const setTodosPage = createAction(SET_PAGE_ACTION, props<{page:Page}>());
