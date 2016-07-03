"use strict";
var Product = (function () {
    //status?: string;
    function Product(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Product;
}());
exports.Product = Product;
// let product = new Product({
// 	name: 'my product',
// 	price: 234,
// 	stock: 10,
// 	packing: 'X01',
// 	description: "new product description"
// });
//# sourceMappingURL=product.js.map