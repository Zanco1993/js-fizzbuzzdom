const containerBox = document.querySelector(".container-box");

for (let i = 1; i <= 100; i++){
    console.log(i);
}

// for (let i = 1; i <= 100; i++){
//     containerBox.innerHTML += `<div class="box">${i}</div>`;
// }

for (let i = 1; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        // se è divisibile sia per 5 che per 3 allora scrivi
        //FizzBuss
        containerBox.innerHTML += `<div class="box">FizzBuss</div>`;
    } else if (i % 3 === 0) {
        containerBox.innerHTML += `<div class="box">Fizz</div>`;
    } else if (i % 5 === 0){
        containerBox.innerHTML += `<div class="box">Buzz</div>`;
    } else {
        containerBox.innerHTML += `<div class="box">${i}</div>`;
    }
}