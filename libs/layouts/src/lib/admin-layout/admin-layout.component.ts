import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'llt-admin-layout',
  template: `
    <ng-content select="llt-header"></ng-content>
    <ng-content select="llt-nav"></ng-content>
    <ng-content select="llt-main"></ng-content>
    <ng-content select="llt-aside"></ng-content>
    <ng-content select="llt-footer"></ng-content>
  `,
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AdminLayoutComponent implements OnInit {
  @HostBinding('class.layout') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
