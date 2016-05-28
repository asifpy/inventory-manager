"use strict";
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
var ProductCreateComponent = (function () {
    function ProductCreateComponent(fb) {
        this.productForm = fb.group({
            'id': ['', common_1.Validators.required],
            'name': ['', common_1.Validators.required],
            'price': ['', common_1.Validators.required],
            'stock': ['', common_1.Validators.required],
            'packings': ['', common_1.Validators.required]
        });
    }
    ProductCreateComponent.prototype.onSubmit = function (value) {
        //console.log('you submitted value:', value.id); 
        console.log('you submitted value:', value);
    };
    ProductCreateComponent = __decorate([
        core_1.Component({
            selector: 'product-create',
            templateUrl: 'inventory/templates/product-create.component.html',
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());
exports.ProductCreateComponent = ProductCreateComponent;
//# sourceMappingURL=product-create.component.js.map