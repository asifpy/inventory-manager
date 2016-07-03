import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { ObjectKeys } from '../../shared/abstract';
//import { productValue } from '../shared/product-form';

@Component({
	selector: 'product-details',
	moduleId: module.id,
	templateUrl: 'product-detail.component.html',
	//providers: [ObjectKeysService]
})

export class ProductDetailComponent extends ObjectKeys {
	@Input()
	pr: Product;
	//n: number = 10;

	// ngOnInit() {
	// 	console.log(productValue(this.pr, "name"))
	// }

	product_properties = () => { return this.keys(this.pr) }

}