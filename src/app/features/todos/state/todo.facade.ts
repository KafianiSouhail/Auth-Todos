import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Page } from "src/app/core/models/interfaces";
import { Todo, TodoPyload } from "../models";
import { addTodoRequest, fetchTodosRequest, setTodosLength, setTodosPage } from "./todo.actions";
import { selectLength, selectLoadingTodos, selectPage, selectTodos } from "./todo.selectors";
import { TodosState } from "./todo.state";

@Injectable({providedIn: 'root'})
export class TodoFacade{
    getTodos$: Observable<Todo[]>;
    getLoadingTodos$: Observable<boolean>;
    getPage$: Observable<Page>;
    getLength$: Observable<number>;

    constructor(private store:Store<TodosState>){
        this.getTodos$ = this.store.select(selectTodos);
        this.getLoadingTodos$ = this.store.select(selectLoadingTodos);
        this.getPage$ = this.store.select(selectPage);
        this.getLength$ = this.store.select(selectLength);
    }

    addTodo(todo:TodoPyload): void{
        this.store.dispatch(addTodoRequest({ todo }));
    }

    fetchTodos(shouldMatch:string): void{
        this.store.dispatch(fetchTodosRequest({shouldMatch}));
    }

    setLength(length:number){
        this.store.dispatch(setTodosLength({length}));
    }

    setPage(page:Page){
        this.store.dispatch(setTodosPage({page}));
    }


}