import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
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
import { getObjectKeys } from '../../shared/common';
import { Product } from '../models/product';
import { productForm } from './product-form';
import {
  getValidatorErrorMessage,
  idValidator
} from '../../validators/custom.validator';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'product-form',
  moduleId: module.id,
  templateUrl: 'product-form.component.html',
  providers: [CheckFormErrors]
})

export class ProductFormComponent {

  productForm: ControlGroup;
  formFields: Array<string>;
  observable : Observable<any>
  view: string;
  
  @Input()
  pr: Product;
  @Output() updateProducts = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private formErrorsService: CheckFormErrors,
    private productService: ProductService,
    private router: Router) {
 
    this.productForm = this.fb.group(productForm());
    this.formFields = getObjectKeys(this.productForm.controls)
  }

  ngOnInit() {
    if (this.pr){
      this.view = "update_product_"+this.pr.id
      
      // update form controls with product properties in update view
      for (let field of getObjectKeys(this.pr)){
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

      if(this.pr) {
        this.observable = this.productService.updateProduct(this.pr, formProduct)
      }
      else {
        this.observable = this.productService.addProduct(formProduct)
      }
      
      this.observable.subscribe((data) => {
        // notify parent component
        this.updateProducts.emit(null);
      });
      console.log("competed")
    }
  }

}