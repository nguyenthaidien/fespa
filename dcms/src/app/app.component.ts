import { Component, effect, inject } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { LeftMenuComponent } from "./layout/left-menu/left-menu.component";
import { MainContentComponent } from "./layout/main-content/main-content.component";
import { FooterComponent } from "./layout/footer/footer.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from  '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';

import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [ HeaderComponent, 
    LeftMenuComponent, 
    MainContentComponent, 
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatTreeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-router-sample';
    private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['vi', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }
}




