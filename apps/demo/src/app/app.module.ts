import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SiteLayoutModule } from '@lowlandtech/site-layout';
import { AdminLayoutModule } from '@lowlandtech/admin-layout';

import { HeaderModule } from '@lowlandtech/header';
import { NavModule } from '@lowlandtech/nav';
import { MainModule } from '@lowlandtech/main';
import { AsideModule } from '@lowlandtech/aside';
import { FooterModule } from '@lowlandtech/footer';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin.page/admin.page.component';

@NgModule({
  declarations: [AppComponent, AdminPageComponent],
  imports: [
    BrowserModule,
    SiteLayoutModule,
    AdminLayoutModule,
    HeaderModule,
    NavModule,
    MainModule,
    AsideModule,
    FooterModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
