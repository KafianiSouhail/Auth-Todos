import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Page } from 'src/app/core/models/interfaces';
import { Todo } from '../../models';
import { TodoFacade } from '../../state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  page: Page = { size:10, index: 1};
  isLoadingTodos: boolean = false;
  todos$: Observable<Todo[]>;
  length$: Observable<number>;
  private searchValue: string = '';

  constructor(private todoFacade:TodoFacade) { }

  ngOnInit(): void {
    this.intializePage();
    this.todoFacade.fetchTodos(this.searchValue);
    this.todoFacade.getLoadingTodos$.pipe(tap(response => this.isLoadingTodos = response))
    .subscribe();
    this.todos$ = this.todoFacade.getTodos$;
    this.length$ = this.todoFacade.getLength$;
  }

  intializePage(): void{
    this.page = {
      size: 10,
      index: 1
    }
  }

  onPaginationParamsChange(page:Page): void{
    this.todoFacade.setPage(page);
    this.todoFacade.fetchTodos(this.searchValue);
  }

  onSearch(shouldMatch:string): void{
    this.searchValue = shouldMatch;
    this.todoFacade.fetchTodos(shouldMatch);
  }

}
