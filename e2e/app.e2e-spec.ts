import { ResumePage } from './app.po';

describe('resume App', function() {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();
  });

  it('should display message saying "Resume"', () => {
    page.navigateTo();
    expect(page.getToolbarTitle()).toEqual('Resume');
  });
});
