import { Header } from '@ab/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from './models/category';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {


  categories: Category[] = [
    {
      id: '1',
      name: 'One',
      description: 'first'
    },
    {
      id: '1',
      name: 'One',
      description: 'first'
    }
  ];

  header: Header = {
    heroClass: 'is-primary',
    title: 'The home of the Angular Builders',
    subtitle: 'A site to help you build great applications with Angular',
  };
}
