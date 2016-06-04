export class Angular2MaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-material-app h1')).getText();
  }
}
