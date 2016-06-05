import { Component, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
  moduleId: module.id,
  selector: 'app-my-grid',
  templateUrl: 'my-grid.component.html',
  styleUrls: ['my-grid.component.css'],
  directives: [MD_GRID_LIST_DIRECTIVES]
})
export class MyGridComponent implements OnInit {
  
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'}
  ];

  constructor() {}

  ngOnInit() {
  }

}
