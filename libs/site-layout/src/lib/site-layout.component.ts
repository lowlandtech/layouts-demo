import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-site-layout',
  template: `
    <p>site-layout works!</p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
