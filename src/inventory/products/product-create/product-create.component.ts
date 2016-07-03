import { Component, Input, OnInit } from '@angular/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  Control,
  ControlGroup,
  ControlArray,
  Validators,
} from '@angular/common';

import { CheckFormErrors } from '../../services/form-errors.service';
import { ObjectKeys } from '../../shared/abstract';
import { Product } from '../data/product';
import { productForm } from '../shared/product-form';
import {
  getValidatorErrorMessage,
  idValidator
} from '../../validators/custom.validator';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'product-create',
  moduleId: module.id,
  templateUrl: 'product-create.component.html',
  providers: [CheckFormErrors, ProductService]
})

export class ProductCreateComponent extends ObjectKeys {

  //id: Control = new Control('', Validators.required)

  productForm: ControlGroup;
  formFields: Array<string>;
  errorField: string;

  constructor(fb: FormBuilder, private formErrorsService: CheckFormErrors, private productService: ProductService) {
    super();
    this.productForm = fb.group(productForm(null));
    this.formFields = this.keys(this.productForm.controls)
  }

  formError() {
    return this.formErrorsService.formError(this.productForm)
  }

  saveProduct() {
    console.log(this.productForm.value)
    if (this.productForm.dirty && this.productForm.valid) {
      let form = this.productForm.value
      let product = new Product({
        id: form.id,
        name: form.name,
        price: form.price,
        stock: form.stock,
        packing: form.packing,
        description: form.description
      });

      this.productService.addProduct(product)


      alert(`Name: ${this.productForm.value.id} Email: ${this.productForm.value.name}`);
    }
  }

  // onSubmit(value: any): void {
  //   //console.log('you submitted value:', value.id); 
  //   console.log('you submitted value:', value)
  // }
}