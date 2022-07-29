import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, pluck, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy{
  @ViewChild('searchField', {static: true}) searchFieldRef:ElementRef;
  private subjectToUnsbscribeFromObservables:Subject<any> = new Subject();
  @Output() private onUserEntersValue:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    this.handleSearchField();
  }

  handleSearchField(): void{
    console.log(this.searchFieldRef);
    
    fromEvent(this.searchFieldRef.nativeElement, 'keyup').pipe(
      takeUntil(this.subjectToUnsbscribeFromObservables),
      pluck('target','value'),
      debounceTime(500),
      distinctUntilChanged(),
    )
    .subscribe(response => this.fireEvent(response as any))
  }

  fireEvent(shouldMatch:string): void{
    this.onUserEntersValue.emit(shouldMatch);
  }

  ngOnDestroy(): void {
    
  }

}
