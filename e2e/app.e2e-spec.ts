import { ResumePage } from './app.po';

describe('resume App', function() {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
