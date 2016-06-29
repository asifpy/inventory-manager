import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';


@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [ProductListComponent, ProductCreateComponent],

})
export class AppComponent{
	title = 'Product - Inventory Manager';

}

