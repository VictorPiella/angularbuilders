import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from '@ab/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, LayoutModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
