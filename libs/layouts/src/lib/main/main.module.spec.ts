import { async, TestBed } from '@angular/core/testing';
import { MainModule } from './main.module';

describe('MainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MainModule).toBeDefined();
  });
});
