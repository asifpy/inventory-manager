import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { ProductDetailComponent } from './product-detail.component';

@Component({
  selector: 'product-list',
  templateUrl: 'inventory/templates/product-list.component.html',
  directives: [ProductDetailComponent],
})

export class ProductListComponent implements OnInit{
	public products: Product[];

	getProducts(){
		this.products = PRODUCTS;
	}

	ngOnInit() {
		this.getProducts();
	}

}