function displayA(){
    console.log('A');
}

function displayB(callback){
    setTimeout(() => {
        console.log("B");
        callback();
    }, 2000);
}

function displayC() {
    console.log("C");
}

displayA();
displayB(displayC); // displayB를 실행한 후 이어서 displayC 를 실행