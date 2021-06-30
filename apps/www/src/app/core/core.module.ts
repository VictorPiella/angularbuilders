import { TrackerInterceptor } from '@ab/data';
import { ErrorHandlerService, TrackerStoreService } from '@ab/global';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CoreRoutingModule } from './core-routing.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: AdapterInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TrackerInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
  ],
})
export class CoreModule {
  constructor(router: Router, tracker: TrackerStoreService) {
    router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationEnd),
        map((routerEvent) => routerEvent as NavigationEnd)
      )
      .subscribe({
        next: (navigation: NavigationEnd) =>
          tracker.trackEntry({
            category: 'BUSINESS',
            event: 'NAV',
            label: navigation.urlAfterRedirects,
          }),
      });
    if (environment.production === false) {
      // ToDo: Use Redux DevTools
      tracker.selectActions$().subscribe((action) => console.table(action));
    }
    tracker.trackEntry({
      category: 'SYSTEM',
      event: 'APP_STARTED',
      label: JSON.stringify(environment),
    });
  }
}
