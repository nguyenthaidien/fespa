import { Component, Input,Output, effect, inject,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadge } from '@angular/material/badge';
//
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
//
import { ActivatedRoute  } from '@angular/router';
import { signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Keycloak
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
    MatTooltipModule,
    MatBadge,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {

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

  currentUrl = signal('');




  notificationCount = 3; // Số lượng thông báo chưa đọc (ví dụ tĩnh)
  constructor(private translate: TranslateService
    , private http: HttpClient
    , private route: ActivatedRoute
    , private router: Router) 
    {
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
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        document.body.classList.add(savedTheme);
      }
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
     
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
    body.classList.remove('vnpt-theme','light-theme', 'dark-theme', 'blue-theme');
    body.classList.add(themeName);
    localStorage.setItem('selectedTheme', themeName);
    window.location.reload();
  }


}
