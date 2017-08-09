import { LogodenchieuPage } from './app.po';

describe('logodenchieu App', () => {
  let page: LogodenchieuPage;

  beforeEach(() => {
    page = new LogodenchieuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
