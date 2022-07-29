import { createEntityAdapter } from "@ngrx/entity";
import { Todo } from "../models";
import { TodosState } from "./todo.state";


export const todoAdapter = createEntityAdapter<Todo>();