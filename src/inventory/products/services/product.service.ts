import { Injectable } from '@angular/core';
import { Product } from '../data/product';
import { PRODUCTS } from '../data/mock-products';


@Injectable()
export class ProductService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for products
  products: Product[] = [];

  constructor() {
    //localStorage.setItem('INVENTORY', JSON.stringify(PRODUCTS));
    //localStorage.clear()
    this.products = JSON.parse(localStorage.getItem('INVENTORY') || '[]')
  }

  addProduct(product: Product): ProductService {
    if (!product.id) {
      product.id = ++this.lastId;
    }
    this.products.push(product);
    localStorage.setItem('INVENTORY', JSON.stringify(this.products));
    return this;
  }

  updateProductById(id: number, values: Object = {}): Product {
    let todo = this.getProductById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products
      .filter(product => product.id === id)
      .pop();
  }

  deleteProductById(id: number): ProductService {
    this.products = this.products
      .filter(product => product.id !== id);
    return this;
  }


}
