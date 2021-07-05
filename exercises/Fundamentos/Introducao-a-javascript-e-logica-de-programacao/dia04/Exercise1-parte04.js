function isPalindrome (palavra) {
    let invertedWord = '';
   

    for (let i = palavra.length-1 ; i >= 0 ; i =- 1) {
            invertedWord = invertedWord + palavra[i];
            
    }

    if (invertedWord === palavra)
        return  true;
    else
        return false;
}


if ( isPalindrome(`ovo`) == true) 
    console.log("Eh um palindromo");
    else
    console.log("Nao eh palidromo");