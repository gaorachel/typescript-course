// truthiness guards
const el = document.getElementById("idk");

if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
    }
  }
};

// equality narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x;
    y;
  }
}

// narrowing with the In operator
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(type: Movie | TVShow) {
  if ("duration" in type) {
    return type.duration;
  }
  return type.numEpisodes * type.episodeDuration;
}

// type predicates "param name is Type" i.e., animal is Cat
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "Bow Bow";
  }
}

// discriminated unions
interface Sheep {
  kind: "sheep"; // or type, TYPE, name_type etc.
  name: string;
  weight: number;
  age: number;
}

interface Cow {
  kind: "cow";
  name: string;
  weight: number;
  age: number;
}

interface Pig {
  kind: "pig";
  name: string;
  weight: number;
  age: number;
}

interface newAnimal {
  kind: "newAnimal";
  name: string;
  weight: number;
  age: number;
}

type FarmAnimal = Sheep | Cow | Pig | newAnimal;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      animal;
      return "Zhu";
    case "cow":
      animal;
      return "moooo";
    case "sheep":
      animal;
      return "mie";
    default:
      //   const shouldNeverGethere: never = animal;
      //   return shouldNeverGethere;
      const _exhaustiveChecker: never = animal; // _exhaustiveChecker is more common to use
      return _exhaustiveChecker;
  }
}

// exhaustiveness checks with never
