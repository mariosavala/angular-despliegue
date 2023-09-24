import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    nombre: 'Trunks',
    poder: 10
  }];

/*   @Output()
  public onDeleteItem:EventEmitter<String>=new EventEmitter(); */


  /*   onDeleteCharacter(name:String):void{
    this.onDeleteItem.emit(name);
  } */

  @Output()
  public onDeleteByid:EventEmitter<String>=new EventEmitter();

  onDeleteById(id:String):void{
    this.onDeleteByid.emit(id);
  }

}
