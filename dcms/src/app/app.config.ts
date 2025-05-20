import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideKeycloakAngular } from './keycloak.config';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { includeBearerTokenInterceptor } from 'keycloak-angular';



/* const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/10.82.14.80:8080)(\/.*)?$/i
});
 */



  export const appConfig: ApplicationConfig = {
    providers: [
      provideKeycloakAngular(),
      provideHttpClient(withInterceptors([includeBearerTokenInterceptor])), 
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes)
    ]
  };