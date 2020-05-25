import { async, TestBed } from '@angular/core/testing';
import { AdminLayoutModule } from './admin-layout.module';

describe('AdminLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminLayoutModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminLayoutModule).toBeDefined();
  });
});
