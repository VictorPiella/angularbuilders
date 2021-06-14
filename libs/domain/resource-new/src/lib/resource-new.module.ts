import { AuthGuard } from '@ab/auth';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResourceNewPage } from './resource-new.page';
import { ResourceNewForm } from './resource-new/resource-new.form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: ResourceNewPage,
      },
    ]),
  ],
  declarations: [ResourceNewPage, ResourceNewForm],
})
export class ResourceNewModule {}
