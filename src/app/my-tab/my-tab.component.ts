import { Component, OnInit } from '@angular/core';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

@Component({
  moduleId: module.id,
  selector: 'app-my-tab',
  templateUrl: 'my-tab.component.html',
  styleUrls: ['my-tab.component.css'],
  directives: [MD_TABS_DIRECTIVES]
})
export class MyTabComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
