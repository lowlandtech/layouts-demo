import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-admin',
  template: `
    <div class="container">
      <header><outlet name="header"><outlet></header>
      <aside class="nav"><outlet name="nav"><outlet></aside>
      <main><outlet name="main"><outlet></main>
      <aside class="menubar"><outlet name="aside"><outlet></aside>
      <footer><outlet name="footer"><outlet></footer>
    <div>
  `,
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
