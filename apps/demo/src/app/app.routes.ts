import { Routes, } from '@angular/router';
import { SiteLayoutComponent } from '@lowlandtech/site-layout';
import { AdminLayoutComponent } from '@lowlandtech/admin-layout';
import { HeaderComponent } from '@lowlandtech/header';
import { NavComponent } from '@lowlandtech/nav';
import { AdminPageComponent } from './pages/admin.page/admin.page.component';
import { AsideComponent } from '@lowlandtech/aside';
import { FooterComponent } from '@lowlandtech/footer';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '',
    component: SiteLayoutComponent,
    children: [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  ]},
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: HeaderComponent, outlet: 'header' },
      // { path: '', component: NavComponent, outlet: 'nav' },
      { path: '', component: AdminPageComponent },
      // { path: '', component: AsideComponent, outlet: 'aside' },
      // { path: '', component: FooterComponent, outlet: 'footer' }
    ]
  }
];
