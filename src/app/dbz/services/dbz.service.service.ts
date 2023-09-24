import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceService {

  public characters: Character[] = [
    {
      id:uuid(),
      nombre: 'Krilin',
      poder: 1000
    },
    {
      id:uuid(),
      nombre: 'Goku',
      poder: 10000
    },
    {
      id:uuid(),
      nombre: 'Vegeta',
      poder: 7500
    }];

    onNewCharacter(character:Character):void {

      const newCharacter: Character={id:uuid(), ...character}; //copio los elementos y agrego el id
      this.characters.push(newCharacter);

    }

/*     onDeleteCharacter(name:String):void{

      this.characters= this.characters.filter((element)=> element.nombre!==name);
      console.log(this.characters);

    } */

    deleteById(id:String):void {

      this.characters= this.characters.filter((element)=> element.id!==id);
      console.log(this.characters);

    }


}
