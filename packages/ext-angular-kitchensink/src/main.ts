declare var Ext: any;
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Ext.onReady(function () {
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});