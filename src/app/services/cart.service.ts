import { Product } from 'src/app/models/product';
import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import {map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient) { }

addProductToCart(product: Product): Observable<any>{
  return this.http.post( cartUrl, {product})
}
removeFromCart(productId: string) {
  return this.http.delete(`${cartUrl}/${productId}`);
}

getCartItems(): Observable<CartItem[]>{
return this.http.get<CartItem[]>(cartUrl).pipe(map((result:any[]) =>{
   let cartItems: CartItem[] = [];

   for(let item of result){

    let productExists = false;

    for (let i in cartItems) {
      if ( cartItems[i].productId === item.product.id) {
        cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      cartItems.push(new CartItem(item.id, item.product)

      );
    }

   }

   return cartItems;

}));
}

}
