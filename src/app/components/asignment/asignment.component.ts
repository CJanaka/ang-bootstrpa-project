import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-asignment',
  templateUrl: './asignment.component.html',
  styleUrls: ['./asignment.component.css']
})
export class AsignmentComponent implements OnInit {

  jobForm !: FormGroup;
  submited: boolean = false;
  isLoading: boolean = false;
  subject: string[] = ['O/L', 'A/L', 'Diploma'];
  maritial = [{ id: 1, name: 'Devorced'},
              { id: 2, name: 'Single' },
              { id: 3, name: 'Maried' }
            ];

  get f() {
    return this.jobForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.addMaryToCheckBox();
  }

  initForm(): void {
    this.jobForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      lastName: [''],
      dob: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.email]],
      edu: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      mary: new FormArray([]),
      gender: ['', [Validators.required]]
    });
  }
  get maritialArray() {
    return this.jobForm.controls['mary'] as FormArray;
    // return controls as form array
  }

  addMaryToCheckBox() {
    this.maritial.forEach(() => this.maritialArray.push(new FormControl(false)));
  }

  onSubmit(): void {
    console.log(this.jobForm.value);
    this.submited = true;
    if (this.jobForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
      }, 3000);
    }
    console.log(this.jobForm.value.mary[1]);
  }

  clearForm(): void {
    this.submited = false;
    this.jobForm.reset;
  }

}
