import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-my-card',
  templateUrl: 'my-card.component.html',
  styleUrls: ['my-card.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class MyCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
