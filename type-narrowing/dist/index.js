"use strict";
// truthiness guards
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
        }
    }
};
// equality narrowing
function someDemo(x, y) {
    if (x === y) {
        x;
        y;
    }
}
function getRuntime(type) {
    if ("duration" in type) {
        return type.duration;
    }
    return type.numEpisodes * type.episodeDuration;
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "Bow Bow";
    }
}
function getFarmAnimalSound(animal) {
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
            const _exhaustiveChecker = animal; // _exhaustiveChecker is more common to use
            return _exhaustiveChecker;
    }
}
// exhaustiveness checks with never
