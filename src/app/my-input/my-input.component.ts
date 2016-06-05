import { Component, OnInit } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-my-input',
  templateUrl: 'my-input.component.html',
  styleUrls: ['my-input.component.css'],
  directives: [MD_INPUT_DIRECTIVES]
})
export class MyInputComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
