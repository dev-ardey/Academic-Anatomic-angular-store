import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/160',
      name: 'atlas',
      price: 495,
      quantity: 4,
      id: 56,
    },
    {
      product: 'https://via.placeholder.com/160',
      name: 'atlas',
      price: 495,
      quantity: 8,
      id: 56,
    }
  ]
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

}
