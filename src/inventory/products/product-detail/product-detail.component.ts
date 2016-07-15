import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ObjectKeys } from '../../shared/abstract';

@Component({
	selector: 'product-details',
	moduleId: module.id,
	templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent extends ObjectKeys {
	@Input()
	pr: Product;

	product_properties = () => { return this.keys(this.pr) }

}