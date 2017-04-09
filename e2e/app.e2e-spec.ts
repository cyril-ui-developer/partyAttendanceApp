import { Angular2AddReadAppPage } from './app.po';

describe('angular2-add-read-app App', function() {
  let page: Angular2AddReadAppPage;

  beforeEach(() => {
    page = new Angular2AddReadAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
