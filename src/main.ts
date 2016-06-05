import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2MaterialAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdIconRegistry } from '@angular2-material/icon';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2MaterialAppComponent, [HTTP_PROVIDERS, MdIconRegistry]);
