import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todoAdapter } from "./todo.adapter";
import { todoFeature } from "./todo.reducer";
import { TodosState, TODO_STATE_NAME } from "./todo.state";

// Setup selectors
const selectTodosState = createFeatureSelector<TodosState>(TODO_STATE_NAME);
const selectFactory = (cb:(state:TodosState) => any) => createSelector(selectTodosState,cb);

// Selectors
export const selectTodos = selectFactory(todoAdapter.getSelectors().selectAll);
export const selectLoadingTodos = todoFeature.selectLoadingTodos;
export const selectPage = todoFeature.selectPage;
export const selectLength = todoFeature.selectLength;