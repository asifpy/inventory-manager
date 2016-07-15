import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductFormComponent } from '../product-form/product-form.component'


@Component({
  selector: 'product-update',
  moduleId: module.id,
  templateUrl: 'product-update.component.html',
  directives: [ProductFormComponent]
})

export class ProductUpdateComponent {
  @Input()
  pr: Product;
}