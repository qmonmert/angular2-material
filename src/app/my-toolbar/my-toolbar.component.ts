import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-my-toolbar',
  templateUrl: 'my-toolbar.component.html',
  styleUrls: ['my-toolbar.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES]
})
export class MyToolbarComponent implements OnInit {
  
  myColor: string = 'primary';

  constructor() {}

  ngOnInit() {
  }

}
