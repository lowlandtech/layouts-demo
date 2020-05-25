import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutModule } from './admin-layout';
import { AsideModule } from './aside';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { MainModule } from './main';
import { NavModule } from './nav';
import { SiteLayoutModule } from './site-layout';

@NgModule({
  imports: [
    CommonModule,
    AdminLayoutModule,
    AsideModule,
    FooterModule,
    HeaderModule,
    MainModule,
    NavModule,
    SiteLayoutModule
  ],
  exports: [
    AdminLayoutModule,
    AsideModule,
    FooterModule,
    HeaderModule,
    MainModule,
    NavModule,
    SiteLayoutModule
  ]
})
export class LayoutsModule {}
