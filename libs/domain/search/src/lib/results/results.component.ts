import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Resource } from '../models/resource';

@Component({
  selector: 'ab-results',
  templateUrl: './results.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  @Input() resources: Resource[] = [];
}
