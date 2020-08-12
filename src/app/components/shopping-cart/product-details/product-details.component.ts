import { selectedProduct } from './../../../products/store/productselector';
import { ProductState } from 'src/app/products/store/product.reducer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Store, select } from '@ngrx/store';
import * as fromActions from 'src/app/products/store/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  // product$: Observable<Product>;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private service: ProductService,
  //   private store: Store<ProductState>
  // ) {}

  // ngOnInit() {
  //    this.store.dispatch(
  //      fromActions.loadProduct({ id: this.route.snapshot.paramMap.get("id") })
  //    );

  //    this.product$ = this.store.pipe(select(selectedProduct));

  // }

  // deleteProduct(id: string) {
  //  this.store.dispatch(fromActions.deleteProduct({ id }))
  // }

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  ngOnInit() {
    this.product$ = this.service.getProduct(
      this.route.snapshot.paramMap.get("id")
    );

    console.log(this.product$,'hell')
  }

  deleteProduct(id: string) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.router.navigate(["/product/list"]);
      },
      error: err => console.error(err)
    };
    this.service.deleteProduct(id).subscribe(productsObserver);
  }
}
