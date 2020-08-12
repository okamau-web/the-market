 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
productsUrl = "http://localhost:3000/products"
cartUrl = "http://localhost:3000/cart"
  constructor(private http: HttpClient) {}

  addProduct(payload: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, payload);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  editProduct(model: Product): Observable<Product> {
    return this.http.put<Product>(this.productsUrl + model.id, model);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.productsUrl}/${productId}`);
  }
  removeCartProduct(productId: string) {
   return this.http.delete(`${this.cartUrl}/${productId}`);
  }

}
