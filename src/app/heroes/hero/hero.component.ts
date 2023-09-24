import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre:String="Iroman";
  public edad:number=35;

  get capitalizerName():String{

      return this.nombre.toUpperCase();

  }

  getConcatenarInformacion():String {

    return `${this.nombre} - ${this.edad}`;

  }

  changeName():void {
    this.nombre="Mario";
  }

  changeAge():void{
    this.edad=15;
  }

}
