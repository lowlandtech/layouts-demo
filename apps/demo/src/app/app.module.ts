import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
