"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require('./products/product-list/product-list.component');
exports.routes = [
    //{ path: 'products/:id/update', component: HeroDetailComponent }
    //{ path: '', component: ContactsListComponent },
    { path: 'dashboard', component: product_list_component_1.ProductListComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map