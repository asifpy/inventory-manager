import { Validators } from '@angular/common';
import { idValidator } from '../../validators/custom.validator';

import { Product } from '../data/product';
import { getObjectValue } from '../../shared/common';


export function productForm(product) {
	let idChecks: any[] = [
		Validators.required,
		idValidator
	]

	let nameChecks: any[] = [
		Validators.required,
		Validators.maxLength(10)
	]

	let form = {
		'id': [getObjectValue(product, 'id'), Validators.compose(idChecks)],
		'name': [getObjectValue(product, 'name'), Validators.compose(nameChecks)],
		'price': [getObjectValue(product, 'price'), Validators.required],
		'stock': [getObjectValue(product, 'stock'), Validators.required],
		'packing': [getObjectValue(product, 'packing'), Validators.required]
	}

	return form
}