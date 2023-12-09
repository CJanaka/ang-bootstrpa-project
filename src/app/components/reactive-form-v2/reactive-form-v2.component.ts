import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validators/mustMatchValidators';

@Component({
  selector: 'app-reactive-form-v2',
  templateUrl: './reactive-form-v2.component.html',
  styleUrls: ['./reactive-form-v2.component.css']
})
export class ReactiveFormV2Component implements OnInit {

  studentForm!: FormGroup;
  submited: boolean = false;
  isLoading: boolean = false;
  
  get f(){
    return this.studentForm.controls;
  }

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.studentForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      lastName: [''],
      dob:['',[Validators.required]],
      contact: ['',[Validators.required]],
      address: ['',[Validators.required,Validators.maxLength(200)]],
      email: ['',[Validators.required,Validators.email]],     
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    },{
      Validators : MustMatch('password','confirmPassword')
    });

  }

  onSubmit(): void {
    this.submited = true;
    // console.log(this.studentForm.value);
    // console.log(this.studentForm.controls);

    // this.studentForm.patchValue({
    //   firstName: 'jana',
    //   lastName: 'chathuranga',
    //   dob: '1999-08-24',
    //   contact: '402599885',
    // })

    if (this.studentForm.valid) {
        this.isLoading = true;
        setTimeout(() => {
          console.log('Response');
          this.isLoading = false;
        }, 3000);
    }
  }

  clearForm(): void {
    this.submited = false;
    this.studentForm.reset;
  }

}
