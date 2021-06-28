import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseForm } from '../course/course.form';
import { Category } from '../models/category';
import { Resource } from '../models/resource';

@Component({
  selector: 'ab-resource-new',
  templateUrl: './resource-new.form.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceNewForm implements OnInit {
  @Input() categories: Category[] = [];
  @Output() send = new EventEmitter<Resource>();
  @ViewChild(CourseForm, { static: true }) courseSubForm!: CourseForm;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      categoryId: new FormControl('', [Validators.required]),
      resourcename: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [Validators.minLength(3)]),
      url: new FormControl('', []),
      course: this.courseSubForm.buildForm(),
    });
  }
  onSubmit() {
    this.send.next(this.form.value);
  }
  hasErrorToShow(formControlName: string) {
    const control = this.form.controls[formControlName];
    return control.touched && control.invalid;
  }
  getErrorMessage(formControlName: string) {
    const control = this.form.controls[formControlName];
    return JSON.stringify(control.errors);
  }
}
