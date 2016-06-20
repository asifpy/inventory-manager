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
import { Product } from '../data/product';
import {
  getValidatorErrorMessage, 
  idValidator
} from '../validators/custom.validator';

@Component({
  selector: 'product-create',
  templateUrl: 'inventory/templates/product-create.component.html',
  providers: [ObjectKeysService]
})

export class ProductCreateComponent {
  
  //id: Control = new Control('', Validators.required)
  
  productForm: ControlGroup;
  formFields: Array<string>;
  
  idChecks: any[] = [
    Validators.required,
    idValidator
  ]

  nameChecks: any[] = [
    Validators.required,
    Validators.maxLength(10)
  ]

  constructor(fb: FormBuilder, keysService: ObjectKeysService) {
    this.productForm = fb.group({
    'id': ['', Validators.compose(this.idChecks)],
    'name': ['', Validators.compose(this.nameChecks)],
	  'price': ['', Validators.required],
		'stock': ['', Validators.required],
		'packings': ['', Validators.required]
		});

    this.formFields = keysService.keys(this.productForm.controls)  
	}

  getErrors(field){

     let control = this.productForm.find(field)
     for (let propertyName in control.errors)
     {
       if(control.errors.hasOwnProperty(propertyName) && control.touched)
       {
         return getValidatorErrorMessage(propertyName);
       }
     }
     return null
     //console.log(this.productForm.find(field).errors)
   }
 
  onSubmit(value: any): void {  
    //console.log('you submitted value:', value.id); 
    console.log('you submitted value:', value)
  }
}