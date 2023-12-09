import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  @ViewChild ('f') form: any; 
  studentModel: Student = new Student;
  languages: string[] = ['Sinhala','English','Tamil','Geraman'];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('Please enter valid data');
      return;
    }

    console.log(this.form.value.firstName);
    alert('Success');
    this.form.reset(); 
    this.studentModel.language = '';
  }

}
