import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/app.component';
import { ObjectKeysService } from './services/object-keys.service';

bootstrap(AppComponent, [ObjectKeysService]);