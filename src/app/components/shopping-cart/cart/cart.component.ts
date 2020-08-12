 
import { Component, OnInit } from "@angular/core";

import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;

  constructor(private msg: MessengerService,
    private cartservice:CartService) {}

  ngOnInit() {
   this.handleSubscription();
   this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
       this.loadCartItems();
    });
  }

loadCartItems(){
this.cartservice.getCartItems().subscribe((items: CartItem[])=>{
this.cartItems = items;
this.calcCartTotal();

})
}

  calcCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
