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

import { CheckFormErrors } from '..//services/form-errors.service';
import { ObjectKeys } from '../shared/abstract';
import { Product } from '../data/product';
import {
  getValidatorErrorMessage, 
  idValidator
} from '../validators/custom.validator';

@Component({
  selector: 'product-create',
  templateUrl: 'inventory/templates/product-create.component.html',
  providers: [CheckFormErrors]
})

export class ProductCreateComponent extends ObjectKeys  {
  
  //id: Control = new Control('', Validators.required)
  
  productForm: ControlGroup;
  formFields: Array<string>;
  errorField: string;

  //formError: string;
  
  idChecks: any[] = [
    Validators.required,
    idValidator
  ]

  nameChecks: any[] = [
    Validators.required,
    Validators.maxLength(10)
  ]

  constructor(fb: FormBuilder, private formErrorsService: CheckFormErrors) {
    super();
    this.productForm = fb.group({
      'id': ['', Validators.compose(this.idChecks)],
      'name': ['', Validators.compose(this.nameChecks)],
	    'price': ['', Validators.required],
		  'stock': ['', Validators.required],
		  'packings': ['', Validators.required]
		});

    this.formFields = this.keys(this.productForm.controls)

	}

  formError(){
    return this.formErrorsService.formError(this.productForm)
  }


  onSubmit(value: any): void {  
    //console.log('you submitted value:', value.id); 
    console.log('you submitted value:', value)
  }
}