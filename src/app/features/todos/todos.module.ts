import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './pages/todos/todos.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { todoFeature, TodosEffect } from './state';
import { EffectsModule } from '@ngrx/effects';
import { SkeltonTodoComponent } from './components/skelton-todo/skelton-todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    SkeltonTodoComponent
  ],
  imports: [
    TodosRoutingModule,
    SharedModule,
    StoreModule.forFeature( todoFeature ),
    EffectsModule.forFeature( [TodosEffect] )
  ]
})
export class TodosModule { }
