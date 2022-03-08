import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  number1: number;
  number2: number;
  result : number;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.result = this.number1 + this.number2;
  }
  
  subtraction(){
    this.result = this.number1 - this.number2;
  }

  multiply(){
    this.result = this.number1 * this.number2;
  }

  devide() {
    this.result = this.number1 / this.number2;
  }

  allClear(){
    this.number1 = null;
    this.number2 = null
    this.result = null;
   }

}
