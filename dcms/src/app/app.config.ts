import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideKeycloakAngular } from './keycloak.config';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { includeBearerTokenInterceptor } from 'keycloak-angular';

import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";


/* const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/10.82.14.80:8080)(\/.*)?$/i
});
 */



  export const appConfig: ApplicationConfig = {
    providers: [
      provideKeycloakAngular(),
      provideHttpClient(withInterceptors([includeBearerTokenInterceptor])), 
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideTranslateService({
            loader: provideTranslateHttpLoader({
              prefix: './i18n/',
              suffix: '.json'
            }),
            fallbackLang: 'en'
      })
    ]
  };