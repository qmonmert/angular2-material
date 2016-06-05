import { Component } from '@angular/core';
import { MyCardComponent } from './my-card/my-card.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { MyProgressBarComponent } from './my-progress-bar/my-progress-bar.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyTabComponent } from './my-tab/my-tab.component';
import { MyInputComponent } from './my-input/my-input.component';
import { MySidenavComponent } from './my-sidenav/my-sidenav.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-material-app',
  templateUrl: 'angular2-material.component.html',
  styleUrls: ['angular2-material.component.css'],
  directives: [MyCardComponent, MyButtonComponent, 
                MyToolbarComponent, MyGridComponent, 
                MyProgressBarComponent, MyListComponent,
                MyTabComponent, MyInputComponent,
                MySidenavComponent]
})
export class Angular2MaterialAppComponent {}
