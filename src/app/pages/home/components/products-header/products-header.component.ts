import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  // output sends data outside of component to parent component
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'descending';
  itemsShowCount = 13;

  constructor() { }

  ngOnInit(): void {
  }

  // updrates sort
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  //doesnt return anything just returns the value
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    //call columnsCountChange and emit that number
    this.columnsCountChange.emit(colsNum);
  }
}