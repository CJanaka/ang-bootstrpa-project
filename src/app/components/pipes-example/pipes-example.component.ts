import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  myString1: string = "jana";
  myString2: string = "HELLO WORLD";
  amount: number = 102500;
  currentDate = new Date();
  total: number = 56.25458;
  percentageVal: number = 0.5;
  myObject: any[] = [
    {
      id: 1,
      name: 'Abc'
    },
    {
      id: 1,
      name: 'Def'
    },
    {
      id: 1,
      name: 'Egh'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}