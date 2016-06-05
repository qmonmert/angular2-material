import { Component, OnInit } from '@angular/core';
import { MD_SIDENAV_DIRECTIVES, MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES, MdButton, MdAnchor } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-my-sidenav',
  templateUrl: 'my-sidenav.component.html',
  styleUrls: ['my-sidenav.component.css'],
  directives: [MD_SIDENAV_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdButton, MdAnchor, MdSidenav, MdSidenavLayout]
})
export class MySidenavComponent implements OnInit {
    
  constructor() {}

  ngOnInit() {
  }

}
