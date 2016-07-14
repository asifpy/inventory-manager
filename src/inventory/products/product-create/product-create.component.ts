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
import { ProductFormComponent } from '../product-form/product-form.component'


@Component({
  selector: 'product-create',
  moduleId: module.id,
  templateUrl: 'product-create.component.html',
  providers: [CheckFormErrors, ProductService],
  directives: [ProductFormComponent]
})

export class ProductCreateComponent {

}