import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skelton-todo',
  templateUrl: './skelton-todo.component.html',
  styleUrls: ['./skelton-todo.component.scss']
})
export class SkeltonTodoComponent implements OnInit {
  skeletonTheme = { 
    'border-radius': '5px', 
    height: '150px', 
    width:'300px', 
    padding:'15px'
  }
  skeletonThemAllLine={
    ...this.skeletonTheme,
    width:'85vw'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
