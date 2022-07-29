import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, Subject, switchMap, take, takeUntil, tap } from "rxjs";
import { MyNotificationService } from "src/app/core/adapters";
import { FormatterUtil } from "src/app/core/helpers";
import { Page } from "src/app/core/models/interfaces";
import { TodoService } from "../services";
import { addTodoRequest, addTodoSuccess, fetchTodosRequest, setTodos } from "./todo.actions";
import { TodoFacade } from "./todo.facade";

@Injectable()
export class TodosEffect{
    subjectToUnsbuscribeFromFetchTodosObs:Subject<any> = new Subject();

    constructor(
        private todoservice: TodoService, 
        private actions$: Actions,
        private todoFacade: TodoFacade,
        private notificationService: MyNotificationService
    ){
        this.subjectToUnsbuscribeFromFetchTodosObs.asObservable().subscribe(
            d=>{
                console.log('unsubscribe from obs');
                
            }
        )
    }

    addRequest$ = createEffect(() => this.actions$.pipe(
        ofType(addTodoRequest),
        switchMap(action => {
            return this.todoservice.add(action.todo).pipe(
                map(_ => addTodoSuccess())
            )
        })
    ));

    addTodoSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(addTodoSuccess),
        tap(_ => {
            this.notificationService.openSuccess(
                'todos.notifications.add-todo-success',
                {}
            );
        })
    ),{dispatch:false})

    fetchTodosRequest$ = createEffect(() => this.actions$.pipe(
        ofType(fetchTodosRequest),
        switchMap(action => {
            this.subjectToUnsbuscribeFromFetchTodosObs.next('random value')
            return this.todoFacade.getPage$.pipe(
                take(1),
                switchMap((page:Page) => {
                    return this.todoservice.fetch(page,action.shouldMatch).pipe(
                        takeUntil(this.subjectToUnsbuscribeFromFetchTodosObs),
                        map(todosResponse => {
                            this.todoFacade.setLength(todosResponse.meta.pagination.total);
                            return setTodos({todos: FormatterUtil.formatTodosResponseToTodos(todosResponse.data)})
                        })
                    )
                })
            )
        })
    ))
}