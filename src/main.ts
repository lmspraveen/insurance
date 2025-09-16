import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { VERSION as CDK_VERSION } from '@angular/cdk';
import { VERSION as MAT_VERSION, provideNativeDateAdapter } from '@angular/material/core';

import { APP_ROUTES } from './app/app.routes';
import { App } from './app/app';

console.info('Angular CDK version:', CDK_VERSION.full);
console.info('Angular Material version:', MAT_VERSION.full);

bootstrapApplication(App, {
  providers: [provideHttpClient(), provideRouter(APP_ROUTES), provideNativeDateAdapter()],
}).catch((err) => console.error(err));
