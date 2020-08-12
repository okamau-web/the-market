import { Product } from './../../models/product';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

//load all products
export const loadProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product List Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List Effect] Load Products Failure',
  props<{ error: any }>()
);
//load 1 product
export const loadProduct = createAction(
  '[Product Component] Load Product',
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success',
  props<{ selectedProduct: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure',
  props<{ error: any }>()
);
//add product
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failure',
  props<{ error: any }>()
);

export const upsertProduct = createAction(
  '[Product/API] Upsert Product',
  props<{ product: Product }>()
);

export const upsertProducts = createAction(
  '[Product/API] Upsert Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  '[Product/API] Update Products',
  props<{ products: Update<Product>[] }>()
);

//deleting product
export const deleteProduct = createAction(
  '[Product Components] Delete Product',
  props<{ id: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product Delete Effect] Delete Product Success',
  props<{ id: string }>()
);
export const deleteProductFailure= createAction(
  '[Product Delete Effect] Delete Product Failure',
  props<{ error: any }>()
);

export const clearProducts = createAction('[Product/API] Clear Products');
