let firstname: string = 'Danny';
let age: number | string;
let direction: 'UP' | 'DOWN';
direction = 'UP';

let person: {
  name: string;
  isProgrammer: boolean;
};

person = {
  name: 'Danny',
  isProgrammer: true,
};

let ids: number[] = [];
let options: (string | number)[];

let optionns: [string, number];
options = ['UP', 23];

function circle(diam: string): string {
  return 'Circum' + diam;
}

type StringOrNum = string | number;

let id: StringOrNum = 3;

interface Person {
  name: string;
  isProgrammer: boolean;
}

let p1: Person = {
  name: 'Dalia',
  isProgrammer: false,
};

p1.name = 'Hany';

interface Speech {
  sayHi(name: string): string;
  sayHi: (name: string) => string;
  sayBye(name: string): string;
  sayByeBye: (name: string) => string;
}

interface HasLength<T> {
  length: T;
}

let p2: HasLength<number> = {
  length: 3,
};

p2.length = 4;

enum Resources {
  BOOK = 'HI',
}

interface HasLength2 {
  length: number;
}
const logLength = <T extends HasLength2>(a: T) => {
  console.log(a.length);
};
