import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <router-outlet name="header"><router-outlet>
      <router-outlet name="nav"><router-outlet>
      <router-outlet><router-outlet>
      <router-outlet name="aside"><router-outlet>
      <router-outlet name="footer"><router-outlet>
    <div>
  `,
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
