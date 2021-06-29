import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[abUiTrack]',
})
export class TrackDirective {
  @Input('abUiTrack') label?: string;

  @HostListener('click') onClick() {
    console.log(
      (this.label ? this.label : 'hello directives ') + this.el.nativeElement.innerHTML
    );
  }
  constructor(private el: ElementRef) {}
}
