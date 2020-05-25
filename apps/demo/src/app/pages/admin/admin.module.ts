import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
