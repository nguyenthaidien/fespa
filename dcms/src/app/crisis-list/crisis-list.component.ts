import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-crisis-list',
  imports: [],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.scss'
})
export class CrisisListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  [x: string]: any;
  hello: string | undefined;
  data: any;
  //value: string | undefined;

}
