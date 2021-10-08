import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  public num1!: any;
  public num2!: any;
  public result!: any;
  public resultheading: any;

  sum() {
    this.result = this.num1 + this.num2;
    this.resultheading = 'Your Selection: '+ this.num1 + ' + ' + this.num2;
  }

  diff() {
    this.result = this.num1 - this.num2;
    this.resultheading ='Your Selection: '+ this.num1 + ' - ' + this.num2;
  }
    mult() {
    this.result = this.num1 * this.num2;
    this.resultheading = 'Your Selection: '+this.num1 + ' x ' + this.num2;
  }
  div() {
      this.result = this.num1 / this.num2;
      this.resultheading = 'Your Selection: '+this.num1 + ' / ' + this.num2;
    }
  modulo() {
      this.result = this.num1 % this.num2;
      this.resultheading = 'Your Selection: '+this.num1 + ' / ' + this.num2;
    }
    reset(){
      this.num1='';
      this.num2='';
      this.resultheading = 'Your Selection: '+this.num1+''+ this.num2;
      this.result ='';
    }
}