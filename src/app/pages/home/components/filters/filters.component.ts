import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()

  //categories holds list of arrays to filter products
  
  categories = ['books', 'courses'];

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
