import { Component, effect, inject } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { LeftMenuComponent } from "./shared/left-menu/left-menu.component";
import { MainContentComponent } from "./shared/main-content/main-content.component";
import { FooterComponent } from "./shared/footer/footer.component";
/* import { KEYCLOAK_EVENT_SIGNAL, KeycloakEventType, ReadyArgs, typeEventArgs } from 'keycloak-angular';
import Keycloak from 'keycloak-js'; */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from  '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [ HeaderComponent, 
    LeftMenuComponent, 
    MainContentComponent, 
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatTreeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-router-sample';
  // treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  // dataSource = new MatTreeNestedDataSource<MenuNode>();

  // constructor() {
  //   this.dataSource.data = TREE_DATA;
  // }

  // hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

}


