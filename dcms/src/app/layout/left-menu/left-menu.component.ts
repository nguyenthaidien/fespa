import { ChangeDetectionStrategy, Component, Output, inject,EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment'; // Adjust the path as needed
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import Keycloak from 'keycloak-js';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import menuData_en from '../../../../public/menu/en.json';
import menuData_vi from '../../../../public/menu/vi.json';
import { signal } from '@angular/core';

interface menuData {
  name: string;
  url?: string;  // Optional URL for nodes
  function_role?: string;  // Optional client_role for nodes
  children?: menuData[];
}
const EXAMPLE_DATA: menuData[] = [];

@Component({
  selector: 'app-left-menu',
  imports: [
    MatTreeModule, MatButtonModule, MatIconModule, MatToolbarModule
    , MatFormFieldModule, MatInputModule, FormsModule, TranslatePipe
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LeftMenuComponent {
   private readonly keycloak = inject(Keycloak);
  dataSource = EXAMPLE_DATA;
  //dataSource =  'menu-data.json';
  companyName = 'Công ty TNHH DCMS';
  appVersion = environment.version;
  currentTheme = localStorage.getItem('selectedTheme') || 'light-theme';
  private translate = inject(TranslateService);
  constructor() {
    this.translate.onLangChange.subscribe(() => this.refreshTree(this.translate.currentLang));
  }
  
  refreshTree(lang: string) {
    if (lang === 'vi') {
    // Logic for Vietnamese
      this.dataSource = menuData_vi;
    } else if (lang === 'en') {
    // Logic for English
      this.dataSource = menuData_en;
    } ;
    
  }

  //Search box
  searchQuery: string = '';
  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Tìm kiếm:', this.searchQuery);
      // TODO: Gọi API hoặc lọc dữ liệu tại đây
    }
  }

  childrenAccessor = (node: menuData) => node.children ?? [];
  hasChild = (_: number, node: menuData) => !!node.children && node.children.length > 0;


  logout() {
    this.keycloak.logout();
  }



}



