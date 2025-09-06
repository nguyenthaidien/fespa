import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import  { MatBadge} from '@angular/material/badge';
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
    TranslatePipe  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})



export class HeaderComponent implements OnInit
{

  authenticated = true;
  keycloakStatus: string | undefined;
  keycloakToken: string | undefined;
  private readonly keycloak = inject(Keycloak);
  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);
  iconRegistry: any;
  sanitizer: any;


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
  
  notifications: any[] = [];
  notificationCount: number = 0;


  ngOnInit(): void {
    this.fetchNotifications();
  }
  fetchNotifications(): void {
    this.http.get<any[]>('https://your-api.com/api/notifications')
      .subscribe(data => {
        this.notifications = data.filter(n => n.isNew);
        this.notificationCount = this.notifications.length;
      }, error => {
        console.error('Lỗi khi lấy thông báo:', error);
      });
  }

}
