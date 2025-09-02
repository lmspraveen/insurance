import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {provideHttpClient} from '@angular/common/http';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION} from '@angular/material/core';
//import { SidenavResponsiveExample } from './mainLayout/sidenav-responsive-example';
import { App } from './app/app';

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(App, {
  providers: [provideHttpClient()],
}).catch(err => console.error(err));
