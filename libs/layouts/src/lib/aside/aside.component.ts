import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'llt-aside',
  template: `
    <ng-content>
    </ng-content>
  `,
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @HostBinding('class.app-aside') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
