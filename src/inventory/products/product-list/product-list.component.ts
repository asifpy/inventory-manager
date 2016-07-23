import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductService } from '../services/product.service';

@Component({
	selector: 'product-list',
	moduleId: module.id,
	templateUrl: 'product-list.component.html',
	directives: [
		ProductDetailComponent,
		ProductUpdateComponent,
		ProductCreateComponent
	],
})

export class ProductListComponent {
	public products: any;

	constructor(private productService: ProductService) {
		this.getProducts()
	}

	productsChanged(event) {
		this.getProducts()
	}

	getProducts(){
		this.productService.getAllProducts()
			.subscribe(
				response => this.products = response.products
        );
	}
}