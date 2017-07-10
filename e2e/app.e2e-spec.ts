import { LayoutTest01Page } from './app.po';

describe('layout-test01 App', () => {
  let page: LayoutTest01Page;

  beforeEach(() => {
    page = new LayoutTest01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
