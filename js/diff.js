// ---------------------------------------------------------------------------- //
// 1) this 키워드는 언제나 상위 스코프를 가리킨다.

// var firstName = "Kim";
// var lastName = "Jinsu";

// let user = {
//   firstName: "Park",
//   lastName: "Minji",
//   showName: function () {
//     function showFullName() {
//       console.log(this.firstName + " " + this.lastName); // Kim Jinsu
//     }

//     const showFullName = () => {
//       console.log(this.firstName + " " + this.lastName); // Park Minji
//     };

//     showFullName();
//   },
// };

// user.showName();
// ---------------------------------------------------------------------------- //
// 2) 화살표 함수는 arguments를 지원하지 않는다.

// function func() {
//   console.log(arguments);
// }

// func(1, 2, 3); // [1, 2, 3]

// const func = () => {
//   console.log(arguments);
// };

// func(1, 2, 3); // Error: arguments is not defined

// rest parameter를 사용하면 파라미터를 배열 형태로 출력할 수 있다.
// const func = (...rest) => {
//   console.log(rest);
// };

// func(1, 2, 3); // [1, 2, 3]

// ---------------------------------------------------------------------------- //
// 3) 화살표 함수는 arguments를 지원하지 않는다.

// function Person(name) {
//   this.name = name;
// }

// const person = new Person("Kim");

// console.log(person.name); // Kim

// const Person = (name) => {
//   this.name = name;
// };

// const person = new Person("Kim"); // Error: Person is not a constructor

// console.log(person.name);

// ---------------------------------------------------------------------------- //
// 4) 화살표 함수는 prototype를 지원하지 않는다.

// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype); // { constructor: ƒ }

// const Person = (name) => {
//   this.name = name;
// };

// console.log(Person.prototype); // undefined

// ---------------------------------------------------------------------------- //
// 5) 화살표 함수는 yield를 지원하지 않는다.
// function* showNumber() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let num = showNumber();

// console.log(num.next()); // { "value": 1, "done": false }
// console.log(num.next()); // { "value": 2, "done": false }
// console.log(num.next()); // { "value": 3, "done": false }
// console.log(num.next()); // { "value": undefined, "done": true }

// 올바르지 않은 문법
// const showNumber = *() => { // Error: Unexpected token '*'
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let num = showNumber();

// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
