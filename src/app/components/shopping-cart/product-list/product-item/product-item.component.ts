
import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/products/store/product.reducer';

import * as fromActions from 'src/app/products/store/product.actions';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() productItem: Product

  constructor(private msg:MessengerService, private cartservice:CartService,
    private store:Store<ProductState>) { }

  ngOnInit() {
  }

handleAddToCart(){
  this.cartservice.addProductToCart(this.productItem).subscribe(()=>{
    this.msg.sendMsg(this.productItem)
  });
}


 removeProduct(id:string){
this.store.dispatch(fromActions.deleteProduct({id}))}
}
