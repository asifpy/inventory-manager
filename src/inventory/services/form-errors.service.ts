import { Injectable, Inject } from '@angular/core';

import { getObjectKeys } from '../shared/common';
import { getValidatorErrorMessage } from '../validators/custom.validator';


@Injectable()
export class CheckFormErrors {

	getFormFields(form){
		return getObjectKeys(form.controls)
	}

	formError(form) {
		let error = this.getErrors(form)
		let errorField = getObjectKeys(error)[0]
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