import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });

  beforeAll(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(true);
    page.navigateTo();
    browser.sleep(3000);
  });


  it('should vote agree and show 100%', () => {
    const agree = element(by.css('.spec-agree'));
    const vote = element(by.css('.spec-vote'));
    const value = element(by.css('.spec-value-100'));

    agree.click();
    vote.click();
    expect(value.getText()).toEqual('100%');
    browser.sleep(3000);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
