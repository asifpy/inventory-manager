import { provideRouter, RouterConfig } from '@angular/router';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';



export const routes: RouterConfig = [
	//{ path: 'products/:id/update', component: HeroDetailComponent }
	//{ path: '', component: ContactsListComponent },
	{ path: 'dashboard', component: ProductListComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];