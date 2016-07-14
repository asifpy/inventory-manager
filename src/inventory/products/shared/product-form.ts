import { Validators } from '@angular/common';
import { idValidator } from '../../validators/custom.validator';

import { Product } from '../data/product';
import { getObjectValue } from '../../shared/common';


export function productForm() {
	let idChecks: any[] = [
		Validators.required,
		idValidator
	]

	let nameChecks: any[] = [
		Validators.required,
		Validators.maxLength(10)
	]

	let form = {
		'code': ['', Validators.compose(idChecks)],
		'name': ['', Validators.compose(nameChecks)],
		'price': ['', Validators.required],
		//'stock': [getObjectValue(product, 'stock'), Validators.required],
		'packing': ['', Validators.required],
		'description': ['', Validators.required]
	}
	//console.log(form)
	return form
}