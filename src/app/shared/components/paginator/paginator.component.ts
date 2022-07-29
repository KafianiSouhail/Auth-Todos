import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number = 0;
  @Input() pageSizeOptions: number[] = [10, 25, 50];
  @Output() onPageChange:EventEmitter<Page> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPaginatorParamsChange(event:any){
    const { pageSize:size, pageIndex:index } = event;
    this.onPageChange.emit({size, index});
  }

}
