import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { ObjectKeysService } from '../services/object-keys.service';

@Component({
  selector: 'product-details',
  templateUrl: 'inventory/templates/product-detail.component.html',
  //providers: [ObjectKeysService]
})

export class ProductDetailComponent{
	@Input()
	pr: Product;
	//n: number = 10;

	constructor(private keysService: ObjectKeysService){}
	//product_propertie = this.keysService.keys(this.n)

	product_properties = () => { return this.keysService.keys(this.pr) }
	
}