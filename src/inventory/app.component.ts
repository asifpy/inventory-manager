import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from './products/services/product.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [
  	ProductListComponent,
	ROUTER_DIRECTIVES
  ],
  providers: [ProductService]
  

})
export class AppComponent{
	title = 'Product - Inventory Manager';

}

