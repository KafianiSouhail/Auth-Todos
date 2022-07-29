import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Helper } from 'src/app/core/helpers';
import { TodoTypes } from '../../models/enums';
import { TodoPyload, TodoType } from '../../models/interfaces';
import { TodoFacade } from '../../state';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todoForm:FormGroup;
  todoTypesEnum:typeof TodoTypes = TodoTypes;
  todoTypes: TodoType[] = [];

  constructor(private helper:Helper, private todoFacade:TodoFacade) { }

  ngOnInit(): void {
    this.initializeTodoForm();
    this.initializeTodoTypes();
  }

  initializeTodoTypes():void{
    this.helper.fetchTodoTypes((_todotypes:TodoType[]) =>  this.todoTypes = _todotypes);
  }

  initializeTodoForm():void{
    this.todoForm = new FormGroup({
      "title": new FormControl(null, 
        [Validators.required, Validators.minLength(5)]
      ),
      "content": new FormControl(null,
        [Validators.required, Validators.minLength(3)]
      ),
      "type": new FormControl(TodoTypes.PERSONAL, Validators.required)
    })
  }

  onChooseTodoType(todoType:TodoTypes){
    this.todoForm.get('type')?.setValue(todoType);
  }

  onAddTodo():void{
    if(!this.isFormValid()) return;
   const todoPyload: TodoPyload = this.todoForm.value;
   this.todoFacade.addTodo(todoPyload);
  }

  private isFormValid():boolean{
    return this.todoForm.valid
  }

}
