import { TrackerStoreService } from '@ab/global';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Notification } from '../models/notification';

@Component({
  selector: 'ab-navbar',
  templateUrl: './navbar.widget.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarWidget {
  notification$: Observable<Notification>;

  constructor(tracker: TrackerStoreService) {
    this.notification$ = tracker.selectAnyErrors$().pipe(
      map(() => ({
        class: 'is-danger',
        message:
          'There was an error!. Review your data and retry. If persists we will fix it ASAP!',
      }))
    );
  }
}
