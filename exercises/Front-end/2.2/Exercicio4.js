let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mediaAritimetica = 0;

for (let i = 0 ; i < numbers.length - 1; i++) {
    mediaAritimetica = numbers[i] + mediaAritimetica;
}

mediaAritimetica = mediaAritimetica/numbers.length;

if (mediaAritimetica  <= 20 )
    console.log("Valor menor ou igual a 20");
    else
        console.log("Valor maior que 20");