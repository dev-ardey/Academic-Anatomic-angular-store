import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
  // default is 3 product boxes per row, but if user clicks on first sorting icon, it will change to fullWidthMode
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Test Book',
    price: 250,
    category: 'ebook',
    description: 'Description',
    image: 'https://via.placeholder.com/160'
  };
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
