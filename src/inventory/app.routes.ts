import { provideRouter, RouterConfig } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: RouterConfig = [
	//{ path: 'products/:id/update', component: HeroDetailComponent }
	//{ path: '', component: ContactsListComponent },

	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'dashboard', component: ProductListComponent },
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];