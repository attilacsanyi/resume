import { ResumePage } from './app.po';

describe('resume App', () => {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();

    page.navigateTo();
  });

  it('should display title saying "Resume"', () => {
    expect(page.getToolbarTitle()).toEqual('Resume');
  });

  it('should display title name saying "Attila Csaányi"', () => {
    expect(page.getToolbarTitle()).toEqual('Attila Csaányi');
  });
});
