import { AuthGuard } from '@ab/auth';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResourceNewPage } from './resource-new.page';
import { ResourceNewForm } from './resource-new/resource-new.form';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: ResourceNewPage,
      },
    ]),
    UiModule,
  ],
  declarations: [ResourceNewPage, ResourceNewForm],
})
export class ResourceNewModule {}
