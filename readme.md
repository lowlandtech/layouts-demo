## Why @lowlandtech/layouts 

First I used to make layouts with bootstrap, which wasn't ideal but better than fighting with css. With the release of Angular Material I migrated when Material was used instead of bootstrap. I also fought with flexbox which I never really appreciated compared to griding with Bootstrap or Material.

One day I saw a youtube video about css-grid and I thought it was the best thing after slice bread. And I immediately thought back at my efforts to have an external site layout for website and and admin layout for admin backend-ish apps. So, today I share my first attempt with the world.

### Objectives

- [x] Make a page layout importable as an angular module
- [x] Use layout components with default and custom content
- [x] Seperate the layout (css-grid) structural style rules from the styling rules
  
## How to install

```shell
$ npm i @lowlandtech/layouts --save --registry https://npm.pkg.github.com`
```

Use your github username and password to login

## How to use
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

Add some styling and this will be the result. (check demo app for examples)

```shell
$ ng serve
```
![admin page with admin layout desktop form factor](https://github.com/lowlandtech/layouts/blob/develop/docs/img/admin-page.png)

I also added a mobile breakpoint with css-grid.

![admin page with admin layout mobile mobile form factor](https://github.com/lowlandtech/layouts/blob/develop/docs/img/admin-page-mobile.png)

There's also a second page (home) which uses the site-layout.

![home page with site layout desktop form factor](https://github.com/lowlandtech/layouts/blob/develop/docs/img/home-page.png)
