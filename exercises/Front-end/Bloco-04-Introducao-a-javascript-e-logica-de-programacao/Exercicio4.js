let n = 11;
let receiveSpace = '';
let receiveStar = '';


if (n % 2 == 0) {
    console.log("Digite um numero impar de asteriscos para formar uma piramide! ");
}
for (let i = 0 ; i < Math.ceil(n/2); i += 1) {

    if (i === 0 ) {
        receiveStar = '*';
    } else
        receiveStar = receiveStar + '**';

    for(let j = i ; j < Math.floor(n/2) ; j += 1 ) {
        receiveSpace = receiveSpace + ' ';
    }

    



    console.log(receiveSpace + receiveStar);
    receiveSpace = '';
}