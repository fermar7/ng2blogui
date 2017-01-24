import { BlogUIPage } from './app.po';

describe('blog-ui App', function() {
  let page: BlogUIPage;

  beforeEach(() => {
    page = new BlogUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
