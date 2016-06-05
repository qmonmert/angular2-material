import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MyProgressBarComponent } from './my-progress-bar.component';

describe('Component: MyProgressBar', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyProgressBarComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyProgressBarComponent],
      (component: MyProgressBarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyProgressBarComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyProgressBarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-progress-bar></app-my-progress-bar>
  `,
  directives: [MyProgressBarComponent]
})
class MyProgressBarComponentTestController {
}

