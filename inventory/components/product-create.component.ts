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

import { ObjectKeysService } from '../services/object-keys.service';
import { CheckFormErrors } from '..//services/form-errors.service';
import { Product } from '../data/product';
import {
  getValidatorErrorMessage, 
  idValidator
} from '../validators/custom.validator';

@Component({
  selector: 'product-create',
  templateUrl: 'inventory/templates/product-create.component.html',
  providers: [CheckFormErrors, ObjectKeysService]
})

export class ProductCreateComponent {
  
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

  constructor(fb: FormBuilder, private keysService: ObjectKeysService, private formErrorsService: CheckFormErrors) {
    this.productForm = fb.group({
      'id': ['', Validators.compose(this.idChecks)],
      'name': ['', Validators.compose(this.nameChecks)],
	    'price': ['', Validators.required],
		  'stock': ['', Validators.required],
		  'packings': ['', Validators.required]
		});

    this.formFields = keysService.keys(this.productForm.controls)
    //console.log(this.formFields)
    //this.formFields = formErrorsService.getFormFields(this.productForm)
    //this.formError = this.formErrorsService.getErrors(this.productForm, this.formFields)
    //console.log(this.formError)

	}

  formError(){
    let error = this.formErrorsService.getErrors(this.productForm, this.formFields)
    this.errorField = this.keysService.keys(error)[0]
    return error
  }


  onSubmit(value: any): void {  
    //console.log('you submitted value:', value.id); 
    console.log('you submitted value:', value)
  }
}