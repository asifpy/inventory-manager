import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';
import { Product } from '../data/product';
import { ProductDetailComponent } from './product-detail.component';

@Component({
  selector: 'product-list',
  templateUrl: 'inventory/templates/product-list.component.html',
  directives: [ProductDetailComponent],
})

export class ProductListComponent {
	public products: Product[];
	constructor(){
		this.products = PRODUCTS
	}
}