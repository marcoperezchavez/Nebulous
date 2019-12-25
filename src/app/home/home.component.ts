import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  number1: string = '65';
  number2: string = '8921';
  generatorA: number = 16807;
  generatorB: number = 48271;
  invalid: boolean = false;
  firstNumer1: number = 0;
  firstNumer2: number = 0;
  allPlus: number = 0;
  factorC: number = 2147483647;
  counter: number = 0;
  messageLoading: boolean = false;
  n1: number = 0;
  n2: number = 0;

  constructor() {
    this.messageLoading = false;
   }

  ngOnInit() {
  }

  public async getResult() {
    this.messageLoading = true;
    if ( this.number1 !== '' && this.number2 !== '' ) {
      this.counter = 0;
      this.allPlus = 0;
      this.n1 = 0;
      this.n2 = 0;
      this.getFirstStep();
      while (this.counter < 40000000) {
        this.n1 = this.getSecondStep(this.firstNumer1, this.generatorA);
        this.n2 = this.getSecondStep(this.firstNumer2, this.generatorB);
        this.compare(this.n1, this.n2);
        this.counter = this.counter + 1;
        console.log(this.counter);
      }
      console.log('this.allPlus');
      console.log(this.allPlus);
    } else {
      this.invalid = true;
    }
    this.messageLoading = false;
  }

  getFirstStep() {
    this.firstNumer1 = +this.number1 * this.generatorA;
    this.firstNumer2 = +this.number2 * this.generatorB;
  }

  compare(n1: number, n2: number): any {
    let b1 = n1.toString(2);
    let b2 = n2.toString(2);
    if ((b1.substring(b1.length - 16 , b1.length)) === (b2.substring(b2.length - 16, b2.length))) {
      this.allPlus = this.allPlus + 1;
    }
    this.firstNumer1 = n1;
    this.firstNumer2 = n2;
  }

  getSecondStep(numberCheck: number, generator: number) {
    let number = (numberCheck * generator) % this.factorC;
    return this.redondear(number);
  }

  redondear(numero) {
    let base = Math.pow(10, 5);
    let entero = Math.round(numero * base);
    return entero / base;
}

}
