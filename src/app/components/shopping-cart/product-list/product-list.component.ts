
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Store, select } from '@ngrx/store';
import { ProductState } from 'src/app/products/store/product.reducer';
import { selectProducts } from 'src/app/products/store/productselector';
import * as fromActions from 'src/app/products/store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
productList$ :Observable<Product[]>

  constructor(private productservice:ProductService,private store:Store<ProductState>) { }

  ngOnInit() {
this.store.dispatch(fromActions.loadProducts())
this.loadProducts();


    //  this.productservice.getProducts().subscribe((products)=>{
    //    this.productList = products;
     //})
    }
 loadProducts(){
  this.productList$ = this.store.pipe(select(selectProducts));
    }


}
