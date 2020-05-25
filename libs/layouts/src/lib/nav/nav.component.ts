import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'llt-nav',
  template: `
    <ng-content>
    </ng-content>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @HostBinding('class.app-nav') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
