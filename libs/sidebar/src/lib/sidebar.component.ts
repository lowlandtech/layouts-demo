import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lowlandtech-sidebar',
  template: `
    <p>
      sidebar works!
    </p>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
