import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2MaterialAppComponent } from '../app/angular2-material.component';

beforeEachProviders(() => [Angular2MaterialAppComponent]);

describe('App: Angular2Material', () => {
  it('should create the app',
      inject([Angular2MaterialAppComponent], (app: Angular2MaterialAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-material works!\'',
      inject([Angular2MaterialAppComponent], (app: Angular2MaterialAppComponent) => {
    // expect(app.title).toEqual('angular2-material works!');
  }));
});
