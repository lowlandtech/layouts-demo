import { async, TestBed } from '@angular/core/testing';
import { SiteLayoutModule } from './site-layout.module';

describe('SiteLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteLayoutModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SiteLayoutModule).toBeDefined();
  });
});
