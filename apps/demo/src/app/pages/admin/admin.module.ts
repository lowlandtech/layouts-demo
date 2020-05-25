import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routes';
import { AdminComponent } from './admin.component';
import { AdminLayoutModule } from '@lowlandtech/admin-layout';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
