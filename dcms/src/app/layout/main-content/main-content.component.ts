import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-main-content',
  imports: [RouterOutlet, TranslatePipe ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
