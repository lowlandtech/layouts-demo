import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './site-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SiteLayoutComponent],
  exports: [SiteLayoutComponent],
})
export class SiteLayoutModule {}
