import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // to hold the initial value of cart
  // when added value to the cart, items holds the added value
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private_snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    //finds the right item
    const items = [...this.cart.value.items];


  }
}
