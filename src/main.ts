import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0QHxbf1x0ZFREallTTnJWUj0eQnxTdEZiW31ZcHFVQWBfUkN1WQ==");


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
