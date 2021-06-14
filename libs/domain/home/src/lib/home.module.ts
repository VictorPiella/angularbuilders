import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CategoryList } from './category-list/category-list.component';
import { UiModule } from '@ab/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomePage}
    ]),
    UiModule
  ],
  declarations: [
    HomePage,
    CategoryList
  ]
})
export class HomeModule {}
