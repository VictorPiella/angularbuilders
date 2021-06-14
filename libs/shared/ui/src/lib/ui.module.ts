import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardTemplate } from './template/card/card.template';

@NgModule({
  imports: [CommonModule, RouterModule,],
  declarations: [
    HeaderComponent,
    CardTemplate,
    TruncatePipe
  ],
  exports: [
    TruncatePipe,
    HeaderComponent,
    CardTemplate
  ],
})
export class UiModule {}
