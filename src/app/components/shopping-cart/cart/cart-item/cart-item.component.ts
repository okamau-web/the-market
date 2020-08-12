import { deleteProduct } from 'src/app/products/store/product.actions';
import { Component, OnInit,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/products/store/product.reducer';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cartTotal = 0
  constructor(private store:Store<ProductState>) { }

  @Input() cartItem: any

  ngOnInit() {

  }

removeFromCart(id: string){
  // this.store.dispatch(deleteProduct({id}))
  this.cartItem.qty--;


    }

}
