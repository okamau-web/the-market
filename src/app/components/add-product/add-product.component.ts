import { Product } from 'src/app/models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/products/store/product.reducer';
import { NgForm } from '@angular/forms';
import { addProduct } from 'src/app/products/store/product.actions';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private store: Store<ProductState>,
    private productservice: ProductService
  ) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.store.dispatch(
      addProduct({
        product: f.value,
      })
    );
  }
}
