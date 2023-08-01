import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
  // default is 3 product boxes per row, but if user clicks on first sorting icon, it will change to fullWidthMode
  @Input() fullWidthMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
