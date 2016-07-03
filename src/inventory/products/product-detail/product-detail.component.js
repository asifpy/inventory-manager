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
var product_1 = require('../data/product');
var abstract_1 = require('../../shared/abstract');
//import { productValue } from '../shared/product-form';
var ProductDetailComponent = (function (_super) {
    __extends(ProductDetailComponent, _super);
    function ProductDetailComponent() {
        var _this = this;
        _super.apply(this, arguments);
        //n: number = 10;
        // ngOnInit() {
        // 	console.log(productValue(this.pr, "name"))
        // }
        this.product_properties = function () { return _this.keys(_this.pr); };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductDetailComponent.prototype, "pr", void 0);
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            moduleId: module.id,
            templateUrl: 'product-detail.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}(abstract_1.ObjectKeys));
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map