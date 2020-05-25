import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'llt-site-layout',
  template: `
    <ng-content select="llt-header"></ng-content>
    <ng-content select="llt-main"></ng-content>
    <ng-content select="llt-footer"></ng-content>
  `,
  styleUrls: ['./site-layout.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SiteLayoutComponent implements OnInit {
  @HostBinding('class.layout') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
