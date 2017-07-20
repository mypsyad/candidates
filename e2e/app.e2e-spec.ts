import { MutyaPage } from './app.po';

describe('mutya App', () => {
  let page: MutyaPage;

  beforeEach(() => {
    page = new MutyaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
