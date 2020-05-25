import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutModule } from '@lowlandtech/admin-layout';
import { AsideModule } from './aside';
import { FooterModule } from '@lowlandtech/footer';
import { HeaderModule } from '@lowlandtech/header';
import { MainModule } from '@lowlandtech/main';
import { NavModule } from '@lowlandtech/nav';
import { SiteLayoutModule } from '@lowlandtech/site-layout';

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
