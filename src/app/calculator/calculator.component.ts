import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result : number;
  singUpForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      'number1': new FormControl(null, Validators.required),
      'number2': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.singUpForm);
  }

  add(){
    this.result = this.singUpForm.value['number1'] + this.singUpForm.value['number2'];
  }
  
  subtraction(){
    this.result = this.singUpForm.value['number1'] - this.singUpForm.value['number2'];
  }

  multiply(){
    this.result = this.singUpForm.value['number1'] * this.singUpForm.value['number2'];
  }

  devide() {
    this.result = this.singUpForm.value['number1'] / this.singUpForm.value['number2'];
  }

  allClear(){
    this.singUpForm.reset()
    this.result = null;
   }

}
