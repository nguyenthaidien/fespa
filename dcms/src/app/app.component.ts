import { Component, effect, inject, EventEmitter } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { LeftMenuComponent } from "./layout/left-menu/left-menu.component";
import { MainContentComponent } from "./layout/main-content/main-content.component";
import { FooterComponent } from "./layout/footer/footer.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from  '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';

import { TranslateService } from "@ngx-translate/core";
import { MatSidenavModule } from '@angular/material/sidenav';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    LeftMenuComponent,
    MainContentComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatTreeModule,
    MatSidenavModule, MatListModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'angular-router-sample';
  constructor(private translate: TranslateService) {
      translate.use('en');
    }

  isSidebarOpen = true;
  sidebarWidth = 250;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }






}




