import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-navbar',
  templateUrl: './navbar.widget.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarWidget implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
