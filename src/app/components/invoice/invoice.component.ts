import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {


  invoiceForm!: FormGroup;
  submited: boolean = false;
  get f() {
    return this.invoiceForm.controls;
  }

  get lineItems(): FormArray {
    return this.invoiceForm.get('lineItems') as FormArray;
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.invoiceForm = this.fb.group({
      invoiceNo: ['', [Validators.required]],
      invoiceDate: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      contactNO: ['', [Validators.required]],
      address: [''],
      remarks: [''],
      grossAmount: ['', [Validators.required]],
      discount: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
      netAmount: ['', [Validators.required]],
      lineItems: this.fb.array([])

    });
  }

  addNewLine(): void {
    this.lineItems.push(this.initLineItem());
  }
  initLineItem(): FormGroup {
    return this.fb.group({
      itemName: ['', [Validators.required]],
      unitPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      total: ['', [Validators.required]]

    });
  }
  deleteLine(index: number): void {
    // if (this.lineItems.length > 1) {
    //   this.lineItems.removeAt(index);
    // } else {
    //   alert('At least one line item should be exist');
    // }
  }
  onSubmit(): void {
    this.submited = true;
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);

    }
  }

  onUnitPriceQuantitiyChanged(i: number): void {
    // const unitPrice: number = Number(this.lineItems.controls[i].get('unitPrice')?.value);
    // const quantity: number = Number(this.lineItems.controls[i].get('quantity')?.value);
    // this.lineItems.controls[i].get('total')?.setValue(unitPrice * quantity);

    this.calculateNetAmunt();
  }

  calculateNetAmunt(): void {

    const discount: number = Number(this.invoiceForm.get('discount')?.value);
    let grossAmount: number = 0;
    let netAmount: number = 0;

    // for (const formRow of this.lineItems.controls) {
    //   grossAmount += Number(formRow.get('total')?.value);
    // }
    netAmount = grossAmount - ((grossAmount * discount) / 100);
    this.invoiceForm.get('grossAmount')?.setValue(grossAmount);
    this.invoiceForm.get('netAmount')?.setValue(netAmount);

  }
}
