import { AuthGuard } from '@ab/auth';
import { FormModule } from '@ab/form';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseForm } from './course/course.form';
import { ResourceNewPage } from './resource-new.page';
import { ResourceNewForm } from './resource-new/resource-new.form';
@NgModule({
  imports: [
    CommonModule,
    FormModule,
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
  declarations: [ResourceNewPage, ResourceNewForm, CourseForm],
})
export class ResourceNewModule {}
