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
var abstract_1 = require('../shared/abstract');
var custom_validator_1 = require('../validators/custom.validator');
var CheckFormErrors = (function (_super) {
    __extends(CheckFormErrors, _super);
    function CheckFormErrors() {
        _super.apply(this, arguments);
    }
    CheckFormErrors.prototype.getFormFields = function (form) {
        return this.keys(form.controls);
    };
    CheckFormErrors.prototype.formError = function (form) {
        var error = this.getErrors(form);
        var errorField = this.keys(error)[0];
        return [error, errorField];
    };
    CheckFormErrors.prototype.getErrors = function (form) {
        var formFields = this.getFormFields(form);
        for (var _i = 0, formFields_1 = formFields; _i < formFields_1.length; _i++) {
            var field = formFields_1[_i];
            var control = form.find(field);
            if (control) {
                for (var propertyName in control.errors) {
                    if (control.errors.hasOwnProperty(propertyName) && control.touched) {
                        return (_a = {}, _a[field] = custom_validator_1.getValidatorErrorMessage(propertyName), _a);
                    }
                }
            }
        }
        return null;
        var _a;
    };
    CheckFormErrors = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CheckFormErrors);
    return CheckFormErrors;
}(abstract_1.ObjectKeys));
exports.CheckFormErrors = CheckFormErrors;
//# sourceMappingURL=form-errors.service.js.map