import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeltonTodoComponent } from './skelton-todo.component';

describe('SkeltonTodoComponent', () => {
  let component: SkeltonTodoComponent;
  let fixture: ComponentFixture<SkeltonTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeltonTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeltonTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
