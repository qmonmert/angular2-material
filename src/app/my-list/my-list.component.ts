import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-my-list',
  templateUrl: 'my-list.component.html',
  styleUrls: ['my-list.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdIcon]
})
export class MyListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
