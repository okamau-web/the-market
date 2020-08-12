import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../material/material.module';
import { ProductsRoutingModule } from './product-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromProduct from '../store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../store/product.effects';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from 'src/app/components/shopping-cart/filters/filters.component';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { CartItemComponent } from 'src/app/components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from 'src/app/components/shopping-cart/product-list/product-item/product-item.component';
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductDetailsComponent } from 'src/app/components/shopping-cart/product-details/product-details.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,

    ProductDetailsComponent,
    AddProductComponent,
    HomeComponent,
   ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
})
export class ProductsModule { }
