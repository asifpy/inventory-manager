import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './inventory/app.component';
import { APP_ROUTER_PROVIDERS } from './inventory/app.routes';

bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS
]);