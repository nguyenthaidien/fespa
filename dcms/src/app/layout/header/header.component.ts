import { Component, Input,Output, effect, inject,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import  { MatBadge } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
//
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';


//Badge




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
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatBadge,
    MatTooltipModule,
    TranslatePipe  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {
 // tooltipText: string = 'Trang chủ';
 // tooltipText: string = 'Trang chủ';

  authenticated = true;
  keycloakStatus: string | undefined;
  keycloakToken: string | undefined;
  private readonly keycloak = inject(Keycloak);
  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);
  iconRegistry: any;
  sanitizer: any;
  @Input() sidebarOpen = true;
  @Input() sidebarWidth = 250;


  @Output() toggleSidebar  = new EventEmitter<void>();

  notificationCount = 3; // Số lượng thông báo chưa đọc (ví dụ tĩnh)
  constructor(private translate: TranslateService, private http: HttpClient) {
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
    //translate.setTranslation('vi', {});

    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }




  }



  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  login() {
    this.keycloak.login();
  }

  logout() {
    this.keycloak.logout();
  }
  
  switchTheme(themeName: string) {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
    body.classList.add(themeName);
    localStorage.setItem('selectedTheme', themeName);
  }




}
