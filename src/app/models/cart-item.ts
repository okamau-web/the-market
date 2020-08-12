import { Product } from 'src/app/models/product';
export class CartItem {
  id: string;
  productId: string;
  productName: string;
  qty: number;
  price: number;

  constructor(id: string, product: Product, qty = 1) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.qty = qty;
    this.price = product.price;
  }
}
