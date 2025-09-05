import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import Keycloak from 'keycloak-js';
import {
  HasRolesDirective,
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  typeEventArgs,
  ReadyArgs
} from 'keycloak-angular';
import { TranslateService } from '@ngx-translate/core'; // thay bằng đúng path




@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})



export class HeaderComponent {

  authenticated = true;
  keycloakStatus: string | undefined;
  keycloakToken: string | undefined;
  private readonly keycloak = inject(Keycloak);
  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);
  iconRegistry: any;
  sanitizer: any;

  constructor(private translate: TranslateService) {
    effect(() => {
      const keycloakEvent = this.keycloakSignal();
      const keycloakXXX = this.keycloak;
      this.keycloakStatus = keycloakEvent.type;
      this.keycloakToken = keycloakXXX.token;
      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this.authenticated = typeEventArgs<ReadyArgs>(keycloakEvent.args);
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this.authenticated = false;
      }
    });
  }

  switchLanguage(lang: 'vi' | 'en') {
    this.translate.use(lang);
  }


  login() {
    this.keycloak.login();
  }

  logout() {
    this.keycloak.logout();
  }

}
