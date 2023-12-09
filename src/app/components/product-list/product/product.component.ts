import { Product, ProductType } from './../../../shared/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
    if (this.product.id == ProductType.Import) {
      
    }
    if (this.product.id == ProductType.Export) {
      
    }
    if (this.product.id == ProductType.RowMaterial) {
      
    }
    if (this.product.id == ProductType.Chemicle) {
      
    }
  }

}
