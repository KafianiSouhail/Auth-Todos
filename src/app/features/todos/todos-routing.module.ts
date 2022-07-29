import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRoutes } from 'src/app/core/models/enums';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: MyRoutes.ADD,
    component: AddTodoComponent
  },
  {
    path: `${MyRoutes.EDIT}`,
    component: UpdateTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
