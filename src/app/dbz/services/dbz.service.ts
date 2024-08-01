import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000,
    id: uuid(),
  },{
    name: 'Goku',
    power: 9500,
    id: uuid(),
  },{
    name: 'Vegeta',
    power: 7500,
    id: uuid(),
  }


];




annadirPersonajaLista(character: Character): void {
  console.log('Main Page');
  console.log(character);



  const newcharacter: Character = {
    id: uuid(),
    name: character.name,
    power: character.power,

  };


  this.characters.push(newcharacter);
}



// onDeleteCharacter(index: number) {
//   this.characters.splice(index,1);
// }


deleteCharacterById (id:string) {
  this.characters = this.characters.filter (character => character.id !== id);
}



}
