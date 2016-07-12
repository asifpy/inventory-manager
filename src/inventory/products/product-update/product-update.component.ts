import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'product-update',
  moduleId: module.id,
  templateUrl: 'product-update.component.html',
  providers: [CheckFormErrors, ProductService]
})

export class ProductUpdateComponent extends ObjectKeys {

  //id: Control = new Control('', Validators.required)

  productForm: ControlGroup;
  formFields: Array<string>;
  errorField: string;
  @Input()
  pr: Product;

  constructor(
    private fb: FormBuilder,
    private formErrorsService: CheckFormErrors,
    private productService: ProductService,
    private router: Router) {
    super();
  }

  ngOnInit() {
    this.productForm = this.fb.group(productForm(this.pr));
    this.formFields = this.keys(this.productForm.controls)
  }

  formError() {
    return this.formErrorsService.formError(this.productForm)
  }

  saveProduct() {
    if (this.productForm.dirty && this.productForm.valid) {
      let form = this.productForm.value
      let formProduct = new Product({
        code: form.code,
        name: form.name,
        price: form.price,
        //stock: form.stock,
        packing: form.packing,
        description: form.description
      });

      this.productService.updateProduct(this.pr, formProduct)
      this.router.navigate(['/']);
    }
  }

}