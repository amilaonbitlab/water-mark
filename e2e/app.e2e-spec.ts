import { WatermarkPage } from './app.po';

describe('watermark App', () => {
  let page: WatermarkPage;

  beforeEach(() => {
    page = new WatermarkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
