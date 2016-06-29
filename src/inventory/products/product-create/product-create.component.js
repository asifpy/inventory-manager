"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var form_errors_service_1 = require('../../services/form-errors.service');
var abstract_1 = require('../../shared/abstract');
var custom_validator_1 = require('../../validators/custom.validator');
var ProductCreateComponent = (function (_super) {
    __extends(ProductCreateComponent, _super);
    function ProductCreateComponent(fb, formErrorsService) {
        _super.call(this);
        this.formErrorsService = formErrorsService;
        //formError: string;
        this.idChecks = [
            common_1.Validators.required,
            custom_validator_1.idValidator
        ];
        this.nameChecks = [
            common_1.Validators.required,
            common_1.Validators.maxLength(10)
        ];
        this.productForm = fb.group({
            'id': ['', common_1.Validators.compose(this.idChecks)],
            'name': ['', common_1.Validators.compose(this.nameChecks)],
            'price': ['', common_1.Validators.required],
            'stock': ['', common_1.Validators.required],
            'packings': ['', common_1.Validators.required]
        });
        this.formFields = this.keys(this.productForm.controls);
    }
    ProductCreateComponent.prototype.formError = function () {
        return this.formErrorsService.formError(this.productForm);
    };
    ProductCreateComponent.prototype.onSubmit = function (value) {
        //console.log('you submitted value:', value.id); 
        console.log('you submitted value:', value);
    };
    ProductCreateComponent = __decorate([
        core_1.Component({
            selector: 'product-create',
            moduleId: module.id,
            templateUrl: 'product-create.component.html',
            providers: [form_errors_service_1.CheckFormErrors]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, form_errors_service_1.CheckFormErrors])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}(abstract_1.ObjectKeys));
exports.ProductCreateComponent = ProductCreateComponent;
//# sourceMappingURL=product-create.component.js.map