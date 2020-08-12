import { CartService } from 'src/app/services/cart.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as fromProductActions from './product.actions';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productservice: ProductService,
    private route: Router,
    private cartservice:CartService
  ) {}

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap((action) =>
        this.productservice.addProduct(action.product).pipe(
          map((product) => fromProductActions.addProductSuccess({ product })),
          catchError((error) =>
            of(fromProductActions.addProductFailure({ error }))
          )
        )
      ),
      tap(()=>this.route.navigate(['/home']))
    )
  );


  loadProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromProductActions.loadProduct),
    mergeMap(action =>
      this.productservice.getProduct(action.id).pipe(
        map(product => fromProductActions.loadProductSuccess({selectedProduct: product })),
        catchError(error =>
          of(fromProductActions.loadProductFailure({ error }))
        )
      )
    )
  )
);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      mergeMap(action =>
        this.productservice.getProducts().pipe(
          map(products => fromProductActions.loadProductsSuccess({ products })),
          catchError(error =>
            of(fromProductActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.deleteProduct),
      mergeMap(action =>
        this.productservice.deleteProduct(action.id).pipe(
          map(() => fromProductActions.deleteProductSuccess({ id: action.id })),
          catchError((error) =>
            of(fromProductActions.deleteProductFailure({ error }))
          )
        )
      ),
      tap(()=>this.route.navigate(['/home']))
    )
  );
  removeCartProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromProductActions.deleteProduct),
    mergeMap(action =>
      this.cartservice.removeFromCart(action.id).pipe(
        map(() => fromProductActions.deleteProductSuccess({ id: action.id })),
        catchError((error) =>
          of(fromProductActions.deleteProductFailure({ error }))
        )
      )
    ),
    tap(()=>this.route.navigate(['/home']))
  )
);

}
