let n = 5;
let receiveAsterisks = '';
let receiveSpace = '';

for (i = 0 ; i < n ; i += 1) {
    receiveAsterisks = receiveAsterisks + '*';


    for (let j = i; j < n ; j += 1) {
        receiveSpace = receiveSpace + ' ';
    }




    console.log(receiveSpace+receiveAsterisks);
    receiveSpace = '';
}
