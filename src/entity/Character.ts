export class  Character {
  name: string;
  HP: number;
  level: number;
  alive: boolean;

  constructor(pseudo: string) {
    this.name = pseudo;
    this.alive = true;
    this.level = 1;
    this.HP = 1000;
  }

  heal(character: Character) {
    if (character.alive === true) {
      character.HP >= 1000
        ? console.log(`${character.name} deja sont maximum de vie`)
        : (character.HP += this.level);
    }
    return character;
  }

  attack(character: Character) {
   
      character.HP -= this.level;
      if (character.HP <= 0) {
        character.die()
        this.level++;
        console.log(`${character.name} est mort`);
        console.log(`${this.name} est maintenant level ${this.level}`);
      } 
  }
 die() {
   return this.alive = false;
 }

}
