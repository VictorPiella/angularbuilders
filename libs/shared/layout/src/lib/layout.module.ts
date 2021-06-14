import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarWidget } from './navbar/navbar.widget';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
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
