import { Component, OnInit } from '@angular/core';


const ROWS_HEIGHT:{ [id:number]:number } = {
  // one item per row with a px height
  1: 400,
  // second item is 3 per row with a px height
  3: 335,
  // thirs item is 4 per row with a px height
  4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' 
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number):void {
    // default row
    this.cols = colsNum;
    // updated row
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string):void {
    this.category = newCategory;
  }

}
