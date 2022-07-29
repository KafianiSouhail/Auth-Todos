import { EntityState } from "@ngrx/entity";
import { Page } from "src/app/core/models/interfaces";
import { Todo } from "../models";
import { todoAdapter } from "./todo.adapter";

export const TODO_STATE_NAME='todos';

export interface TodosState extends EntityState<Todo>{
    loadingTodos:boolean,
    length: number,
    page: Page

}

export const intialTodosState:TodosState = todoAdapter.getInitialState({
    loadingTodos: false,
    page: {index: 0, size: 10},
    length: 0
});