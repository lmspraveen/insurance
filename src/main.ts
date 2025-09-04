import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {provideHttpClient} from '@angular/common/http';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION} from '@angular/material/core';
import { Layout } from './mainLayout/layout';
import { App } from './app/app';

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(Layout, {
  providers: [provideHttpClient()],
}).catch(err => console.error(err));
