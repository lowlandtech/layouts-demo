import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.PageComponent } from './admin.page.component';

describe('Admin.PageComponent', () => {
  let component: Admin.PageComponent;
  let fixture: ComponentFixture<Admin.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
