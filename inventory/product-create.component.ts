import { Component, Input, OnInit } from '@angular/core';
import {  
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,  
  ControlGroup,  
  Validators,    
} from '@angular/common';

import { Product } from './product';

@Component({
  selector: 'product-create',
  templateUrl: 'inventory/templates/product-create.component.html',
})


// export class ProductForm {

// 	form = {
// 		'id':  ['', Validators.required],
// 		'name': ['', Validators.required],
// 		'price': ['', Validators.required],
// 		'stock': ['', Validators.required],
// 		'packings': ['', Validators.required]
// 	}
// }



export class ProductCreateComponent{
	productForm: ControlGroup;

	constructor(fb: FormBuilder) {
		this.productForm = fb.group({
		'id':  ['', Validators.required],
		'name': ['', Validators.required],
		'price': ['', Validators.required],
		'stock': ['', Validators.required],
		'packings': ['', Validators.required]
		});  
	}
 
  onSubmit(value: any): void {  
    //console.log('you submitted value:', value.id); 
    console.log('you submitted value:', value)
  }
}