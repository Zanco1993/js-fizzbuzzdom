//dichiaro la variabile contenitore
const containerBox = document.querySelector(".container-box");

// eseguo il comando partendo da 1 a 100 nella console
for (let i = 1; i <= 100; i++){
    console.log(i);
}

// for (let i = 1; i <= 100; i++){
//     containerBox.innerHTML += `<div class="box">${i}</div>`;
// }


// contatore che parte da 1 a 100 con incremento di 1
// quando avrà concluso il giro, esci dal ciclo
for (let i = 1; i <= 100; i++){
    // se è divisibile sia per 5 che per 3 allora scrivi
    // FizzBuss
    if (i % 5 === 0 && i % 3 === 0) {
        containerBox.innerHTML += `<div class="box box-red text-white">FizzBuss</div>`;
        
    // se divisibile per 3 allora scrivi Fizz
    } else if (i % 3 === 0) {
        containerBox.innerHTML += `<div class="box box-green text-bold">Fizz</div>`;

    // se divisibile per 5 allora scrivi Buzz
    } else if (i % 5 === 0){
        containerBox.innerHTML += `<div class="box box-yellow text-underline">Buzz</div>`;

    // altrimenti se le altre condizioni non sono verificate scrivi 'i'
    } else {
        containerBox.innerHTML += `<div class="box">${i}</div>`;
    }
}
        