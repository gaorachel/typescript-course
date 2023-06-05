"use strict";
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
// <T,> in arrow function if working on tsx file
const getRandomElement2 = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
