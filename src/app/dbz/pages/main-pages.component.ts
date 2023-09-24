import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceService } from '../services/dbz.service.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {


  constructor(private dbzService:DbzServiceService){

  }

  get characters():Character []{
    return [...this.dbzService.characters];
  }

  deleteById(id:String):void{
    this.dbzService.deleteById(id);
  }

  onNewCharacter(character:Character):void {
    this.dbzService.onNewCharacter(character);
  }

}
