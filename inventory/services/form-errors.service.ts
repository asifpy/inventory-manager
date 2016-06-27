import { Injectable, Inject } from '@angular/core';

import { ObjectKeys } from '../shared/abstract';
import { getValidatorErrorMessage } from '../validators/custom.validator';


@Injectable()
export class CheckFormErrors extends ObjectKeys {

	getFormFields(form){
		return this.keys(form.controls)
	}

	formError(form) {
		let error = this.getErrors(form)
		let errorField = this.keys(error)[0]
		return [error, errorField]
	}

	getErrors(form) {
		let formFields = this.getFormFields(form)

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