let ang1 = 70;
let ang2 = 100;
let ang3 = 10;
let answerT = true;
let sum = ang1 + ang2 + ang3;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("Angulo invalido");
}

if (sum == 180) { 
    return answerT;
} else {
    answerT = false;
    return answerT;
}