import { So39780378Page } from './app.po';

describe('so-39780378 App', function() {
  let page: So39780378Page;

  beforeEach(() => {
    page = new So39780378Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
