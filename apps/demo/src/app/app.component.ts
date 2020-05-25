import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template: '<outlet></outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
}
