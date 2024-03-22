//함수 선언
// function greeting(name) {
//     console.log(`${name}님, 안녕하세요?`);
// }

// 함수 호출
// greeting("홍길동");

const greeting = function(name) {
    console.log(`${name}님, 안녕하세요?`);
}

greeting("신종혁")

let hi = () => '안녕하세요?';
console.log(hi());

let sum = (a,b) => {return a + b; };
console.log(sum(100, 200));