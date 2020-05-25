import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NavComponent } from '@lowlandtech/nav';
import { AdminLayoutComponent } from '@lowlandtech/admin-layout';
import { HeaderComponent } from '@lowlandtech/header';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: HeaderComponent, outlet: 'header' },
      { path: '', component: NavComponent, outlet: 'nav' },
      { path: '', component: AdminComponent },
      { path: '', component: HeaderComponent, outlet: 'aside' },
      { path: '', component: HeaderComponent, outlet: 'footer' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
