import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList: Character[] = []



  deleteCharacter(id: string):void {
    // console.log(id);
    this.onDelete.emit(id);
  }



  // deleteCharacter(index: number):void {
  //   // console.log(index);
  //   this.onDelete.emit(index);
  // }




  @Output()
  public onDelete: EventEmitter<string > = new EventEmitter();


  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();




  // public characterList: Character[] = [{
  //   name: 'Trunks',
  //   power: 10

  // }]



}
