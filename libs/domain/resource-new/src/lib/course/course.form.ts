import { AbValidators } from '@ab/form'
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ab-course-form',
  templateUrl: './course.form.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseForm {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  buildForm() {
    this.form = this.fb.group({
      date: new FormControl('', [AbValidators.realisticDate]),
      teacher: new FormControl(''),
      academy: new FormControl(''),
    });
    return this.form;
  }
}
