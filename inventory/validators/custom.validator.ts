export function getValidatorErrorMessage(code) {
	let config = {
      'required': 'Required',
      //other validation messages goes here
    };
    return config[code];
  }