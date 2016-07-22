import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { getObjectKeys } from '../../shared/common';

@Component({
	selector: 'product-details',
	moduleId: module.id,
	templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
	@Input()
	pr: Product;

	product_properties = () => { return getObjectKeys(this.pr) }

}