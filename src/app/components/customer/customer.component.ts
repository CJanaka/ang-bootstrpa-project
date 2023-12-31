import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
//import multiple srvices in one line using index.ts 
import { CustomerService, ProductService, PostService } from '../../services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean>;
  customerForm!: FormGroup
  customerList: any[] = [];
  isUpdate: boolean = false;
  selectedId: string;
  
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.loading.asObservable();
    this.initForm();
    // this.getList();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onSaveOrUpdate(): void {

    if (this.customerForm.invalid) {
      this.toastr.warning('Message', 'Please fill all required fields.');
      return;
    }
    console.log(this.customerForm.value);

    this.loading.next(true);
    //update record
    if (this.isUpdate) {
      this.customerService.update(this.customerForm.value, this.selectedId).subscribe(res => {
        // this.getList();
        this.loading.next(false);
        this.toastr.success('Message', 'Record has been updated.');
      });

    } else {

      //save record
      this.customerService.create(this.customerForm.value).subscribe(res => {
        this.customerForm.reset();
        // this.getList();
        this.toastr.success('Message', 'Record has been added.');
      }, error => {
        alert('Error occured when saving data.\n' + error);
      }, () => {
        console.log('complete');
      });
    }
  }

  getList(): void {
    this.customerService.getAll().subscribe(res => {
      console.log(res);
      this.customerList = res;
    })
  }

  onUpdate(customer: any): void {
    this.isUpdate = true;
    this.selectedId = customer.id;

    this.customerForm.patchValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      dob: customer.dob,
      contactNo: customer.contactNo,
      address: customer.address

    });
  }

  onDelete(id: string) {
    this.loading.next(true);
    let isConfirm: boolean = confirm('Are you sure want to delete this record');

    if (isConfirm) {
      this.customerService.delete(id).subscribe(res => {
        this.loading.next(false);
        // this.getList();
        this.toastr.success('Message', 'Record has been deleted.');
      });
    }
  }

  onReset(): void {
    this.isUpdate = false;
    this.selectedId = '';
  }
}
