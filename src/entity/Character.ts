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
        ? console.log(`${character.name} already at max HP`)
        : (character.HP += this.level);
    }
    return character;
  }

  attack(character: Character) {
   
      character.HP -= this.level;
      if (character.HP <= 0) {
        character.die()
        this.level++;
        console.log(`${character.name} is dead`);
        console.log(`${this.name} is now level ${this.level}`);
      } 
  }
 die() {
   return this.alive = false;
 }

}
