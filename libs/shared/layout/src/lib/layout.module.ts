import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarWidget } from './navbar/navbar.widget';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    NavbarWidget
  ],
  exports: [
    FooterComponent,
    NavbarWidget
  ],
})
export class LayoutModule {}
