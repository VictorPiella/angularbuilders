import { AuthGuard } from '@ab/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const notFoundRoute = {
  path: '**',
  redirectTo: 'not-found',
};
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@ab/home').then((module) => module.HomeModule),
  },
  {
    path: 'resource',
    loadChildren: () =>
      import('@ab/resource').then((module) => module.ResourceModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@ab/category').then((module) => module.CategoryModule),
  },
  {
    path: 'resource-new',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('@ab/resource-new').then((module) => module.ResourceNewModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@ab/search').then((module) => module.SearchModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...routes,
      notFoundRoute,
      {
        path: 'auth',
        loadChildren: () =>
          import('@ab/auth').then((module) => module.AuthModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
