import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-admin',
  template: `
    <div class="container">
      <outlet name="header"><outlet>
      <outlet name="nav"><outlet>
      <outlet name="main"><outlet>
      <outlet name="aside"><outlet>
      <outlet name="footer"><outlet>
    <div>
  `,
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
