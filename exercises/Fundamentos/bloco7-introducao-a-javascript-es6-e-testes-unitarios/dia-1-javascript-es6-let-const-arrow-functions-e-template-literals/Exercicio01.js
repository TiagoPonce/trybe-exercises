// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = escopo => {
    if (escopo === true ) {
      var ifScopt = `Nao devo ser utilizada fora do meu escopo (if)`;
      console.log(`${ifScopt + ` otimo, fui utilizada no escopo!`}`);
    } else {
      var elseScope = `Nao devo ser utilizada fora do meu escopo (else)`
      console.log(`${elseScope}`);
    }
   
}

console.log(testingScope(false));


// const myName = "Isabella"
// console.log(`Welcome ${myName}!`);