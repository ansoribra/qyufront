import { QyufrontPage } from './app.po';

describe('qyufront App', function() {
  let page: QyufrontPage;

  beforeEach(() => {
    page = new QyufrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
