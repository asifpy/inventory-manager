"use strict";
var common_1 = require('@angular/common');
var custom_validator_1 = require('../../validators/custom.validator');
var common_2 = require('../../shared/common');
function productForm(product) {
    var idChecks = [
        common_1.Validators.required,
        custom_validator_1.idValidator
    ];
    var nameChecks = [
        common_1.Validators.required,
        common_1.Validators.maxLength(10)
    ];
    var form = {
        'id': [common_2.getObjectValue(product, 'id'), common_1.Validators.compose(idChecks)],
        'name': [common_2.getObjectValue(product, 'name'), common_1.Validators.compose(nameChecks)],
        'price': [common_2.getObjectValue(product, 'price'), common_1.Validators.required],
        'stock': [common_2.getObjectValue(product, 'stock'), common_1.Validators.required],
        'packing': [common_2.getObjectValue(product, 'packing'), common_1.Validators.required]
    };
    //console.log(form)
    return form;
}
exports.productForm = productForm;
//# sourceMappingURL=product-form.js.map