import { browser, element, by } from 'protractor';

export class ResumePage {
  navigateTo() {
    return browser.get('/');
  }

  getToolbarTitle() {
    return element(by.id('ac-title')).getText();
  }
}
