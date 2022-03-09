import { Character } from "./entity/Character";

let character1 = new Character("toto");
let character2 = new Character("tutu");
let character3 = new Character("tata");

console.log(
  `${character1.name} has ${character1.HP} HP and is level ${character1.level}`
);
console.log(
  `${character2.name} has ${character2.HP} HP and is level ${character2.level}`
);
console.log(
  `${character3.name} has ${character3.HP} HP and is level ${character3.level}`
);

console.log(` ${character1.name} attacks ${character2.name}`);
character1.attack(character2);
console.log(`${character2.name} has ${character2.HP} HP`);

console.log(` ${character3.name} heals ${character2.name}`);
character3.heal(character2);

console.log(`${character2.name} has ${character2.HP} HP`);

console.log(`A FEW MOMENTS LATER`);



console.log(`${character2.name} has ${character2.HP} HP`);

console.log(`${character1.name} attacks ${character2.name}`);
character1.attack(character2);



