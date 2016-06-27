import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { ObjectKeys } from '../shared/abstract';

@Component({
  selector: 'product-details',
  templateUrl: 'inventory/templates/product-detail.component.html',
  //providers: [ObjectKeysService]
})

export class ProductDetailComponent extends ObjectKeys {
	@Input()
	pr: Product;
	//n: number = 10;

	product_properties = () => { return this.keys(this.pr) }
	
}