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
var ProductService = (function () {
    function ProductService() {
        // Placeholder for last id so we can simulate
        // automatic incrementing of id's
        this.lastId = 0;
        // Placeholder for products
        this.products = [];
        //localStorage.setItem('INVENTORY', JSON.stringify(PRODUCTS));
        //localStorage.clear()
        this.products = JSON.parse(localStorage.getItem('INVENTORY') || '[]');
    }
    ProductService.prototype.addProduct = function (product) {
        if (!product.id) {
            product.id = ++this.lastId;
        }
        this.products.push(product);
        localStorage.setItem('INVENTORY', JSON.stringify(this.products));
        return this;
    };
    ProductService.prototype.updateProductById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getProductById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    ProductService.prototype.getAllProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProductById = function (id) {
        return this.products
            .filter(function (product) { return product.id === id; })
            .pop();
    };
    ProductService.prototype.deleteProductById = function (id) {
        this.products = this.products
            .filter(function (product) { return product.id !== id; });
        return this;
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map