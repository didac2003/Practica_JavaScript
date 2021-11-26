    //Ex1
/*
function nom (nom, cognom) {
    console.log(nom + cognom)
}
nom ('Dídac', ' Gros')
*/

//Ex2
/*
function fnom (num= 20) {
    console.log(typeof num)
}
fnom()
*/

//Ex3
/*
function fdata (fecha= new Date()){
console.log(fecha)
}
fdata()
*/

//Ex4
/*
function fdata (){
    var variable = 65
}
fdata()
console.log(variable)
*/

//Ex5
/*
function vocals(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
var variable ='Paraula'
var total = vocals(variable);
console.log(total);
*/

//Ex6
/*
function numeros(a,b, c=7){
    return a+b+c
}
console.log(numeros(10, 6))
*/

//Ex7
/*
function ex7(a,b,c){
    fdata()
    return numeros(a,b,c)
}
console.log(ex7(4,5,6))
*/

//Ex8
/*
function numero(a,b){
    if (a == 30 || b == 30 || a+b == 30) {
        return true
    }
}
console.log(numero(15,15))
*/

//Ex9
/*
var numero = function(a,b){
    if (a == 30 || b == 30 || a+b == 30) {
    return true
    }
}
console.log(numero(30,15))
*/

//Ex10
/*
var numero = (a,b) => {
    if (a===b)
    return true
    else return false
}
console.log(numero(3,3))
*/

//Ex11
/*
var ex11 = a => Math.sqrt(a).toFixed(2)
console.log(ex11(5.67))
*/

//Ex12
/*
var ex12 = a => a.toLowerCase()
console.log(ex12("ADRIA GUAPO"))
*/

//Ex13
/*
var ex13 = (a,b) => {
    if (a!=null && b==null)
        return a
    else if (a==null && b!=null)
        return b
    else if (a!=null && b!=null)
        return [a,b] 
}
console.log(ex13(10,null))
*/

//Ex14
/*
var posicio = (x,y) => {

    return (x.length-x.indexOf(y))
}
console.log(posicio('Hola bondia mite','bondia'));

var dividir = (x,y) => {

    return y.substr((y.length-x),x)
}

console.log(dividir(posicio('Hola bondia mite','bondia'),'Hola bondia mite'))
*/

//Ex15

var funcio1 = (x) => x + x + x
console.log(funcio1(4))

var funcio2 = (p, n, r, t) => p * Math.pow(1 + (r / n), n * t)
console.log(funcio2(1,1,1,2))
