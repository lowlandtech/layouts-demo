## Why @lowlandtech/layouts 

First I used to make layouts with bootstrap, which wasn't ideal but better than fighting with css. With the release of Angular Material I migrated when Material was used instead of bootstrap. I also fought with flexbox which I never really appreciated compared to griding with Bootstrap or Material.

One day I saw a YouTube video about css-grid and I thought it was the best thing since sliced bread. And I immediately thought back at my efforts to have an external site layout for a landing page and and admin layout for admin backend-ish apps. So, today I share my first attempt with the world.

### Roadmap: objectives achieved

- [x] Use css-grid for layout (don't use any css frameworks)
- [x] Make a page layout importable as an angular module
- [x] Use layout components with default and custom content
- [x] Separate the layout (css-grid) structural style rules from the styling rules
  
## How to install

Use your github username and password to login into npm registry on github.

```shell
$ ng new demo & cd demo
$ npm i @lowlandtech/layouts --save --registry https://npm.pkg.github.com
$ ng g module pages/admin --routing
$ ng g component pages/admin --style scss
```

### How to use

> [admin.module.ts](https://github.com/lowlandtech/layouts/blob/master/apps/demo/src/app/pages/admin/admin.component.html)

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '@lowlandtech/layouts'; //reference Layouts package

import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    LayoutsModule, // import LayoutModule
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
```
#### Add some html markup to the template file

> [admin.component.html](https://github.com/lowlandtech/layouts/blob/master/apps/demo/src/app/pages/admin/admin.component.html)

```html
<llt-admin-layout>
  <llt-header>header</llt-header>
  <llt-nav>
    <ul>
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/admin">Admin</a></li>
  </ul>
  </llt-nav>
  <llt-content>admin content</llt-content>
  <llt-aside>aside</llt-aside>
  <llt-footer>footer</llt-footer>
</llt-admin-layout>
```

#### Add some styling

> [admin.component.scss](https://github.com/lowlandtech/layouts/blob/master/apps/demo/src/app/pages/admin/admin.component.scss)

```scss

.layout {
  grid-gap: 12px;
}

.app-header {
  color: white;
  font-size: 14px;
  text-align: center;
  background-color: #0000FF;
  padding: 10px;
}

.app-nav {
  background-color: #00AAFF;
  text-align: center;
  padding: 10px 0;

  ul {
    li {
      color: white;
      a {
        color: white;
        text-decoration: none;
        display: inline-block;
        margin-bottom: 15px;
      }
    }
  }

}

.app-content {
  background-color: #A5A6AB;
  padding: 10px;
  text-align: center;
}

.app-aside {
  margin-right: 0.6rem;
  background-color: #00AAFF;
  text-align: center;
  padding: 10px;
}

.app-footer {
  background-color:#0000FF;
  color: white;
  text-align: center;
  padding: 10px 0;
}
```

#### Add a route and wire it up in the admin module file

> [admin.module.ts](https://github.com/lowlandtech/layouts/blob/master/apps/demo/src/app/pages/admin/admin.module.ts)

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '@lowlandtech/layouts';

import { AdminComponent } from './admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'admin' }
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
```

#### Import the admin.module dynamically in the app.module as a route

> [app.module.ts](https://github.com/lowlandtech/layouts/blob/master/apps/demo/src/app/app.module.ts)
> 
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutsModule } from '@lowlandtech/layouts';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutsModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Run the app.

```shell
$ ng serve
```
![admin page with admin layout desktop form factor](https://github.com/lowlandtech/layouts/blob/master/docs/img/admin-page.png)

I also added a mobile breakpoint with css-grid.

![admin page with admin layout mobile mobile form factor](https://github.com/lowlandtech/layouts/blob/master/docs/img/admin-page-mobile.png)

There's also a second page (home) which uses the site-layout.

![home page with site layout desktop form factor](https://github.com/lowlandtech/layouts/blob/master/docs/img/home-page.png)


## Roadmap

- [ ] Add github action to ng test on git commit to develop
- [ ] Add github action to npm publish a release on git merge to master
- [ ] Create default HeaderItem with default styling and grouping to content left and right
- [ ] Create default NavItem with default styling and grouping by NavItem type (nav-header, nav-menu, nav-menu-item, nav-footer)
- [ ] Use rxjs to emit events from the layout components
- [ ] Make NavComponent collapsible and minimizable
- [ ] Make AsideComponent collapsible and minimizable
- [ ] Remove the component selector and have only semantic html
