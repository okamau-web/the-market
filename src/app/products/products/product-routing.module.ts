 
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';
import { ProductDetailsComponent } from 'src/app/components/shopping-cart/product-details/product-details.component';

const productRoutes: Routes = [
  {path:'addproduct',component:AddProductComponent},
  {path:'view-details',component:ProductDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
