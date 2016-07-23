import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component'


@Component({
  selector: 'product-create',
  moduleId: module.id,
  templateUrl: 'product-create.component.html',
  directives: [ProductFormComponent]
})

export class ProductCreateComponent {
	@Output() productsChanged = new EventEmitter();

	updateProducts(event) {
  		this.productsChanged.emit(null)
	}

}