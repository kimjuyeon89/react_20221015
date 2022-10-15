// let/const =>

/*
    var 키워드 문제점
    1. 호이스팅 문제 => js 변수 선언 부분을 런타임 이전에 위로 끌어올리는 효과가 있다.
    => 변수 선언 이전에 참조하면 undefined 출력(암묵적으로 할당)
    2. 중복 선언 가능
    => 중복 선언을 하더라도 오류를 발생시키지 않기 때문에 런타임(실행) 문제가 발생할 수 있다.
    3. 스코프(유효범위)
    => var 키워드는 함수 레벨 스코프만 지원 => 블록 레벨 스코프를 지원 x 
*/

console.log(num);
var num = 10;
console.log(num);

var num = 100; // var 키워드는 중복 선언 허용.
console.log(num);

// var 키워드는 블록 레벨 스코프 지원x
{
  var num = 1000;
}

console.log(num);

// 함수 레벨 스코프는 지원
function consoleNum() {
  var num = 10;
  console.log(num);
}

consoleNum();

/* 
let키워드는 선언 이전에 참조시 오류가 발생
console.log(str);
let str = "문자열";*/

/* let 키워드는 중복 선언시 오류발생
 let str = "문자열";
 let str= "김주연" */

//let 키워드는 블록 레벨 스코프 지원

let num02 = 100;
{
  let num02 = 1000;
}

console.log(num02);

//const =>constant의 줄임말로 상수라는 뜻
//=>재할당이 불가능하다.
//=> 선언과 초기화를 동시에 해야한다.

const PI = 3.14;
const TAX = 10;

// function 키워드 통한 함수 선언 => 호이스팅 발생

add(2, 1);
function add(a, b) {
  return a + b;
}

/* 화살표 함수(매개변수) => {}의 형태로 작성
 1. 선언이전에 사용 불가
 2. return 생략 가능 => {}, return 생략 => 콜백함수로 많이 사용
 3. this 바인딩 x.
 */

const sub = (a, b) => a - b;
console.log(sub(3, 1));

//곱하기 함수 화살표 함수로 작성해보기
const gob = (a, b) => a * b;
console.log(gob(3, 2));

/*
객체 비구조화 할당(디스트럭처링)
let {변수명} = 객체 => 변수명과 같은 키의 이름의 프로퍼티 값을 할당.
*/
let obj = {
  username: "juyeon Kim",
  age: 30,
  greeting: function () {
    console.log("안녕하세요");
  },
};
// let greeting = obj.greeting();
// let username = obj.username();
let { username, greeting, age } = obj;

console.log(username, age);

// 배열 비구조 할당
//let [변수1, 변수2] = 배열; => 배열의 첫번째 갑승ㄹ 첫번째 변수에, 두번째 값을 두번째 변수에
// let arr = [10, () => a + b];
// let [num03, funcAdd] = arr;

// console.log(num03);
// console.log(funcAdd(5, 2));

//스프레드 문법(펼침)
//...배열 => 배열의 각 원소를 펼치는 효과
let arr02 = [1, 2, 3, 4, 5]; // ...arr02 => 1,2,3,4,5

console.log(Math.max(...arr02));
console.log(1, 2, 3, 4, 5);
console.log(...arr02);

let arr03 = [...arr02]; //불변성을 지키면서 배열을 복자(완벽하지 않다.)

console.log(arr03 === arr02);

//객체 스프레드
let copy = { ...obj, age: 40 }; //{username : obj.username, age: obj.age....}

console.log(copy);

// 비동기 : setTimeout() 대표적인 앱
//처리 결과를 기다리지 않고 다음 코드를 실행함.

// setTimeout(() => {
//   console.log("실행");
// }, 2000);

// function getDate(callback) {
//   //서버에서 데이터를 받아온다고 가정
//   let data;
//   setTimeout(() => {
//     callback(double(arr));
//   }, 2000);
// }

// function double(arr) {
//   return ArrayBuffer.map((item) => item * 2);
// }

// function render(arr) {
//   arr.forEach((item) => {
//     console.log("화면출력", item);
//   });
// }

// // function double(arr){
// //     let result = arr.map(num => num *2);
// //     return new Promise((resolve)=>{
// //         setTimeout(()=>{
// //             resolve(result));
// //     },2000);
// // }

// let data = getDate();
// console.log(data);

// console.log("끝");

//promise : 비동기 처리를 기다렸다가 실행 => 비동기를 동기처럼 처리

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("에러발생");
//   }, 2000);
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((err) => {
//     throw new Error(err);
//   });

// function render(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num + 1);
//     }, 2000);
//   });
// }

//async/await : 프로미스 앞에 await 프로미스가 resolve될 때까지 기다린 후에 다음 코드를 실행
// async 함수는 return 값을 resolve하는 promise를 반환 => return 값 반환x
// async function consoleNum(num) {
//   let result = await render(num);
//   result = await render(result);
//   result = await render(result);
//   console.log(끝);

//   return result;
// }

// async function print() {
//   let result = await consoleNum(10);

//   console.log(result);
// }

// print();

// 삼항연산자
// 조건? 값1 : 값2 => 조건이 참인 경우 ? 뒤의 값 1이, 거짓인 경우 :뒤의 값2반환
let num04 = 4;
let isEven;
if (num04 % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

let isOdd = num04 % 2 == 0 ? "홀수" : "짝수";
console.log(isOdd);

//단축 평가 : &&(and) ||(or)를 사용.
// 피연산자1 && 피연산2 => 피연산자1이 truthy한 값이면 피연산자2, falsy한 값이라면 피연산자 1을 반환

let color = false && "red";

// 피연산자1 || 피연산자2 : 피연산자1이 trythy한 값이면 피연산자 1을 아니면 피연산자 2를 반환

let data = {
  age: 30,
};

//피연산자 1 || 피연산자2
let text = data.height || "해당없음";
console.log(text.num);
console.log(text);

//null 병합 연산자 : 앞의 값이 null 혹은 undefined이면 ??뒤의 값을 할당
let text02 = 0 ?? "데이터없음";

//옵셔널 체이닝 : 앞의 값이 null 혹은 undefined라면 참조하지 않는다.

let user = {
  age: 30,
  height: 173,
  weight: null,
};

console.log(user.weight?.num);

//forEach, map, filter
let arr04 = [1, 2, 3, 4];

//forEach : 각 원소에 대해서 콜백함수 실행 => 반환값없음
arr04.forEach((num) => {
  console.log(num);
});

//map : 각 원소에 대한 콜백함수의 리턴값을 모은 새로운 배열을 반환

//filter : 각 원소에 조건에 부합하는 원소만 새로운 배열로 모아서 반환
//=> 콜백함수의 return값이 true인 경우의 원소만 모은다.

//map과 filter의 콜백함수 화살표 함수로 바꾸기
let mapArr = arr04.map((num) => num * 2);
console.log(mapArr);

let filterArr = arr04.filter((num) => num > 2);
console.log(filterArr);

//userArr의 원소중 나이가 30이상인 사람의 이름과 나이를 하나의 문자열로 모아서 반환하기
//=>["seok:30", "hwanhoon : 40"] 출력
//=>배열 고차함수 복합적으로 사용

let userArr = [
  { username: "seok", age: 30 },
  { username: "jeonchel", age: 29 },
  { username: "gwanhoon", age: 40 },
];

//템플릿 리터널 : 문자열 안에 변수값을 포함시킨다.
//메서드 체이닝

let filterUser = userArr
  .filter((user) => user.age >= 30)
  .map((user) => `${user.username}:${user.age}`);

// let mapUser = filterUser.map((user) => `${user.username}:${user.age}`);
// console.log(mapUser);
console.log(filterUser);

function returnStr() {
  return "문자열";
}

//표현식 =>값으로 평가될 수 있는 식
//문=>프로그래밍을 실행하는 최소 단위

let num11 = 1 + 1;

//스코프(유효범위)
let a = 10; //전역 번후

function outer() {
  //outer한수의 지역변수
  let a = 1;
  function inner() {
    //inner함수의 지역 변수
    let a = 2;
    console.log("inner:", a);
  }
  inner();
  console.log(a);
}

outer();

//rest문법
// =>매개변수의 마지막에 와야한다.

function getTotal(a, ...arr) {
  let result = 0;

  arr.forEach((num) => (result += num));
  console.log(arr);
}

getTotal("문자열", "입니다.", "!!!");
