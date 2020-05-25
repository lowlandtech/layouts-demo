import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from '@lowlandtech/site-layout';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '',
    component: SiteLayoutComponent,
    children: [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  ]},
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
