import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { SearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchPage },
    ]),
  ],
  declarations: [SearchPage, ResultsComponent],
})
export class SearchModule {}
