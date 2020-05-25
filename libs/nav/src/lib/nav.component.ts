import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-nav',
  template: `
    <nav>
      nav works!
    </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
