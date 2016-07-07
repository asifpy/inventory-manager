import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [
  	ProductListComponent,
  	ProductCreateComponent,
	ROUTER_DIRECTIVES],

})
export class AppComponent{
	title = 'Product - Inventory Manager';

}

