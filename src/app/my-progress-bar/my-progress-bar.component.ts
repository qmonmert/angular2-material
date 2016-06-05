import { Component, OnInit } from '@angular/core';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';

@Component({
  moduleId: module.id,
  selector: 'app-my-progress-bar',
  templateUrl: 'my-progress-bar.component.html',
  styleUrls: ['my-progress-bar.component.css'],
  directives: [MD_PROGRESS_BAR_DIRECTIVES]
})
export class MyProgressBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
