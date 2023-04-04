var frase = "Aprendendo javascript";
console.log(frase)
var numero = "1100";
var zero = "0";
var numeroNegativo = "-250";
var numeroReal = "25.65";
var pi = "3.1415";
var realNegativo = "-19.13";
var realZero = "10.0";
console.log(numero)
console.log(zero)
console.log(numeroNegativo)
console.log(numeroReal)
console.log(pi)
console.log(realNegativo)
console.log(realZero)
function returnGame (){
    var game = 'Free Fire';
    if(game === 'Free Fire'){
        var game = 'valorant';
        console.log('Dentro do IF: ' + game);
    }
    console.log('Fora do IF: ' + game);
}
returnGame()
function returnGame2(){
    let game = 'Free Fire';
    if(game === 'Free Fire'){
        let game = 'Valorant';
        console.log('Dentro do IF: ' + game);
    }
    console.log('Fora do IF: ' + game);
}
returnGame2()
const IP = '127.0.0.1';
console.log(IP);