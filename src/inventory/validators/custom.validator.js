"use strict";
function getValidatorErrorMessage(code) {
    var config = {
        'required': 'Required',
        'maxlength': 'Maximum length exceed',
        'invalidId': 'ID should start with 123'
    };
    return config[code];
}
exports.getValidatorErrorMessage = getValidatorErrorMessage;
function idValidator(control) {
    if (!control.value.match(/^123/)) {
        return { 'invalidId': true };
    }
    else {
        return null;
    }
}
exports.idValidator = idValidator;
//# sourceMappingURL=custom.validator.js.map