// how to do it in traditional js:
// class Player {
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }
//   get fullName() {
//     return `${this.first} ${this.last}`;
//   }
//   taunt() {
//     console.log("booyah!");
//   }
// }

// const player1 = new Player("rachel", "gao");

// console.log(player1.fullName);
// console.log(player1.first);

// one way of ts
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
// }

//another way
class Player {
  constructor(public readonly first: string, public readonly last: string, private score: number = 0) {}
}

const player1 = new Player("Rachel", "Gao");
console.log(player1);
