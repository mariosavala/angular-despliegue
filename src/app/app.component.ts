import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: String = 'Anglar y Spring boot';
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
