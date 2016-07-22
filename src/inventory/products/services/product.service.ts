import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';


@Injectable()
export class ProductService {

  // Placeholder for products
  products: Product[] = [];
  product: Product;

  private productUrl = 'http://127.0.0.1:5000/products';  // URL to web api

  constructor(private http: Http) {}

  addProduct(product: Product){
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.productUrl, JSON.stringify(product), {headers: headers})
        .map(this.extractData)
        .catch(this.handleError)
        //.subscribe();

    //return this
  }

  updateProduct(product: Product, formData: Product){
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.productUrl}/${product.id}`;

    return this.http.put(url, JSON.stringify(formData), {headers:headers})
        .map(this.extractData)
        .catch(this.handleError)
        //.subscribe();

    //return this
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.productUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getProductById(id: string): Observable<Product>{
    let url = `${this.productUrl}/${id}`;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteProductById(id: string): ProductService {
    this.products = this.products
      .filter(product => product.id !== id);
    return this;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
