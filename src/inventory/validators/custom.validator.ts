export function getValidatorErrorMessage(code) {
	let config = {
      'required': 'Required',
      'maxlength': 'Maximum length exceed',
      'invalidId': 'ID should start with 123'
      //other validation messages goes here
    };
    return config[code];
  }


export function idValidator(control){  
  if (!control.value.match(/^123/)){  
    return {'invalidId': true};  
  }
  else{
	  return null;
  }
}