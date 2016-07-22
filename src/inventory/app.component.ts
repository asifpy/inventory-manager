import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from './products/services/product.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [
  	ProductListComponent,
  	ProductCreateComponent,
	ROUTER_DIRECTIVES],
  providers: [ProductService]
  

})
export class AppComponent{
	title = 'Product - Inventory Manager';

}

