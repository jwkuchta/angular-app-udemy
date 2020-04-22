import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// starts our application by passing AppModule (app.module.ts) to this method
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
