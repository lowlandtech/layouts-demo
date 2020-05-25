import { async, TestBed } from '@angular/core/testing';
import { NavModule } from './nav.module';

describe('NavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NavModule).toBeDefined();
  });
});
