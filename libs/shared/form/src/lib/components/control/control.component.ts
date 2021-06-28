import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ab-form-control',
  templateUrl: './control.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlComponent),
      multi: true,
    },
  ],
})
export class ControlComponent implements ControlValueAccessor {
  @Input() form!: FormGroup;
  @Input() formControlName = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  value: unknown;
  emitChange: any;
  emitTouch: any;
  constructor() {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.emitChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.emitTouch = fn;
  }

  onInput(event: any) {
    this.value = event.target.value;
    this.emitChange(this.value);
    this.emitTouch();
  }

  hasErrorToShow() {
    const control = this.form.controls[this.formControlName];
    return control.touched && control.invalid;
  }
  hasError() {
    const control = this.form.controls[this.formControlName];
    return control.invalid;
  }
  getErrorMessage() {
    const control = this.form.controls[this.formControlName];
    return JSON.stringify(control.errors);
  }
}
