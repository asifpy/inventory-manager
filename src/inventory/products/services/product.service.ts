import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

import { Product } from '../data/product';
import { PRODUCTS } from '../data/mock-products';


@Injectable()
export class ProductService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for products
  products: Product[] = [];

  private productUrl = 'http://127.0.0.1:5000/products';  // URL to web api

  constructor(private http: Http) {
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

  getAllProducts(): Observable<any> {
    return this.http.get(this.productUrl)
    .map(this.extractData)
    .catch(this.handleError);
    // .subscribe(halls => this.products = halls);
    //return this.products;
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

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
