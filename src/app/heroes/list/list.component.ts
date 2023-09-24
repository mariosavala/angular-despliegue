import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public band:Boolean=false;
  public deletHero:String="";
  public heroesName:String []=['SuperMan','SpiderMan','Hulk','She Hulk'];
  public copyHero:String[]=[];


  deleteLastItem():Boolean {

      if(this.heroesName.length>0){

        this.deletHero=this.heroesName.pop()!;
        this.band=true;
        return this.band;

      }else{

        this.deletHero="Sin heroe para eliminar";
        return this.band;

      }

  }

}
