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

import { Product } from '../data/product';
import { getValidatorErrorMessage } from '../validators/custom.validator';

@Component({
  selector: 'product-create',
  templateUrl: 'inventory/templates/product-create.component.html',
})

export class ProductCreateComponent{
  
  //id: Control = new Control('', Validators.required)
  
  productForm: ControlGroup

	constructor(fb: FormBuilder) {
    this.productForm = fb.group({
		  'id':  ['', Validators.required],
		  'name': ['', Validators.required],
		  'price': ['', Validators.required],
		  'stock': ['', Validators.required],
		  'packings': ['', Validators.required]
		});  
	}

   objToArray(o){
    return Object.keys(o);
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