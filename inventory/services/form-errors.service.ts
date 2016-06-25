import { Injectable, Inject } from '@angular/core';

import { ObjectKeysService } from './object-keys.service';
import { getValidatorErrorMessage } from '../validators/custom.validator';


@Injectable()
export class CheckFormErrors {

	// constructor( @Inject(ObjectKeysService) private keysService: ObjectKeysService) { }

	// getFormFields(form){
	// 	return this.keysService.keys(form.controls)
	// }

	getErrors(form, formFields) {
		//let formFields = this.getFormFields(form)
		//let formFields = fields

		for (let field of formFields) {
			let control = form.find(field)
			if (control) {
				for (let propertyName in control.errors) {
					if (control.errors.hasOwnProperty(propertyName) && control.touched) {
						return { [field]: getValidatorErrorMessage(propertyName) };
					}
				}
			}
		}
		return null

	}

}