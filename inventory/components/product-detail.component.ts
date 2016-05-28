import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data/product';

@Component({
  selector: 'product-details',
  templateUrl: 'inventory/templates/product-detail.component.html',
})

export class ProductDetailComponent{
	@Input()
	product: Product;
	
	product_properties() : Array<string> {
    	return Object.keys(this.product);
 	}
}