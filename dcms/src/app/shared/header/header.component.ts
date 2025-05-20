import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import Keycloak from 'keycloak-js';
import {
  HasRolesDirective,
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  typeEventArgs,
  ReadyArgs
} from 'keycloak-angular';

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

  constructor() {
    // this.iconRegistry.addSvgIcon(
    //   'custom_icon',
    //   //https://fonts.google.com/icons?form=MG0AV3&selected=Material+Symbols+Outlined:home:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f
    //   this.sanitizer.bypassSecurityTrustResourceUrl('assets/home-icon.svg')
    // );

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

  login() {
    this.keycloak.login();
    //this.keycloak.token?.valueOf
  }

  logout() {
    this.keycloak.logout();
  }

}
