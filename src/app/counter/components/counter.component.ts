import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <p>EL valor del counter es {{ counter }}</p>
    <button class="btn btn-lg btn-primary" (click)="incrementByOne()">+1</button>
    <button class="btn btn-lg btn-danger ms-1 me-1" (click)="reset()" >Reset</button>
    <button class="btn btn-lg btn-primary ms-1" (click)="decrementByOne(counter)">-1</button>

  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter:number=10;

  incrementByOne():void {
    this.counter++;
  }

  decrementByOne(valor:number):void {

    if(valor>0)
      this.counter-=1;
    else
      this.counter=10;

  }

  reset():void{
    this.counter=10;
  }


}
