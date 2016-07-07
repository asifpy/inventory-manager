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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var form_errors_service_1 = require('../../services/form-errors.service');
var abstract_1 = require('../../shared/abstract');
var product_1 = require('../data/product');
var product_form_1 = require('../shared/product-form');
var product_service_1 = require('../services/product.service');
var ProductUpdateComponent = (function (_super) {
    __extends(ProductUpdateComponent, _super);
    function ProductUpdateComponent(fb, formErrorsService, productService, router) {
        _super.call(this);
        this.fb = fb;
        this.formErrorsService = formErrorsService;
        this.productService = productService;
        this.router = router;
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        this.productForm = this.fb.group(product_form_1.productForm(this.pr));
        this.formFields = this.keys(this.productForm.controls);
    };
    ProductUpdateComponent.prototype.formError = function () {
        return this.formErrorsService.formError(this.productForm);
    };
    ProductUpdateComponent.prototype.saveProduct = function () {
        if (this.productForm.dirty && this.productForm.valid) {
            var form = this.productForm.value;
            var product = new product_1.Product({
                id: form.id,
                name: form.name,
                price: form.price,
                stock: form.stock,
                packing: form.packing,
                description: form.description
            });
            this.productService.addProduct(product);
            this.router.navigate(['/']);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductUpdateComponent.prototype, "pr", void 0);
    ProductUpdateComponent = __decorate([
        core_1.Component({
            selector: 'product-update',
            moduleId: module.id,
            templateUrl: 'product-update.component.html',
            providers: [form_errors_service_1.CheckFormErrors, product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, form_errors_service_1.CheckFormErrors, product_service_1.ProductService, router_1.Router])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}(abstract_1.ObjectKeys));
exports.ProductUpdateComponent = ProductUpdateComponent;
//# sourceMappingURL=product-update.component.js.map