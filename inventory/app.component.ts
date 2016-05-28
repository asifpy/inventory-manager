import { Component } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductCreateComponent } from './product-create.component';

@Component({
  selector: 'my-app',
  templateUrl: 'inventory/templates/base.html',
  directives: [ProductListComponent, ProductCreateComponent],

})
export class AppComponent{
	title = 'Product - Inventory Manager';

}

