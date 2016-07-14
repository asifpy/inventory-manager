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
  selector: 'product-form',
  moduleId: module.id,
  templateUrl: 'product-form.component.html',
  providers: [CheckFormErrors, ProductService]
})

export class ProductFormComponent extends ObjectKeys {

  productForm: ControlGroup;
  formFields: Array<string>;
  view: string;
  
  @Input()
  pr: Product;

  constructor(
    private fb: FormBuilder,
    private formErrorsService: CheckFormErrors,
    private productService: ProductService,
    private router: Router) {
    super();

    this.productForm = this.fb.group(productForm());
    this.formFields = this.keys(this.productForm.controls)
  }

  ngOnInit() {
    if (this.pr){
      this.view = "update_product_"+this.pr.id
      
      // update form controls with product properties in update view
      for (let field of this.keys(this.pr)){
        let control = this.productForm.controls[field]
        if (control) {
            (<Control>control).updateValue(this.pr[field], true);
        }
      }
    }
    else {
      this.view = "create_product"
    }
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

      if(this.pr){
        this.productService.updateProduct(this.pr, formProduct)
      }
      else{
        this.productService.addProduct(formProduct)
      }
      this.router.navigate(['/']);
    }
  }

}