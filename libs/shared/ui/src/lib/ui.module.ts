import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { TrackDirective } from './directives/track.directive';
import { HeaderComponent } from './components/header/header.component';
import { CardTemplate } from './template/card/card.template';

@NgModule({
  imports: [CommonModule, RouterModule,],
  declarations: [
    HeaderComponent,
    CardTemplate,
    TruncatePipe,
    TrackDirective,
  ],
  exports: [
    TruncatePipe,
    HeaderComponent,
    CardTemplate,
    TrackDirective,
  ],
})
export class UiModule {}
