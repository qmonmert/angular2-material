import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';
import { MdButton, MdAnchor } from '@angular2-material/button/button';

@Component({
  moduleId: module.id,
  selector: 'app-my-button',
  templateUrl: 'my-button.component.html',
  styleUrls: ['my-button.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MdIcon, MdButton, MdAnchor],
})
export class MyButtonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
