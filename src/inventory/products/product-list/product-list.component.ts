import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';
import { Product } from '../data/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../services/product.service';

@Component({
	selector: 'product-list',
	moduleId: module.id,
	templateUrl: 'product-list.component.html',
	directives: [ProductDetailComponent],
	providers: [ProductService]
})

export class ProductListComponent {
	public products: Product[];
	constructor(private productService: ProductService) {
		this.products = this.productService.getAllProducts()
	}
}