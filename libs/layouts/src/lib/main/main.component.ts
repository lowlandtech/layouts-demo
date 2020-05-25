import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'llt-main',
  template: `
  <ng-content>
  </ng-content>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @HostBinding('class.app-main') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
