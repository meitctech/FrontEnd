/*<====declaring variables=====>*/

/*--variables*/
var title_initial,title_variables,string,number,bool_oe,bool_two,animal, title_calc,number_one,number_two,number_tree,number_four,age,up_age,down_age;

/*----titles */
title_initial = "Introdução ao javascript - Imprimindo diretamente no html";
title_variables = "Variáveis e o tipos de variáveis(typeof)";
titleTypeof = "Vendo os tipos das variáveis";
title_calc = "Matemática no javascript";

/*---types */
string = "Conjunto de caracteres";
number = 107099;
bool_one = true;
bool_two = false;
animal = {};

/*--numbers*/
number_one = 7;
number_two = 14;
number_tree = 21;
number_four = 28;

/*---Calc*/
result_soma = number_one + number_two;
result_sub = number_four - number_one;
result_div = number_four / number_one;
result_multi = number_one * number_one;
result_pot = number_one**number_one;
result_rooting = number_four ** (1/2);

/*<====impression area====>*/

/*---titles */

document.getElementById("title_init").innerHTML = title_initial;
document.getElementById("title-var").innerHTML = title_variables;
document.getElementById("title-calc").innerHTML = title_calc;

/*---Types of variables */

document.getElementById("name-one").innerHTML = `${string}: ${typeof(string_one)}`;
document.getElementById("number").innerHTML = `${number}: ${typeof(number)}`;
document.getElementById("bool-one").innerHTML = `${bool_one}/${bool_two}: ${typeof(bool_one)}`;
document.getElementById("object-type").innerHTML = `objetos[]: ${animal}`;

/*---calc*/

document.getElementById("soma").innerHTML = `${number_one} + ${number_two} = ${result_soma} adição`;
document.getElementById("subtraction-one").innerHTML = `${number_four} - ${number_one} = ${result_sub} subtração`;
document.getElementById("division").innerHTML = `${number_four} / ${number_one} = ${result_div} divisão`;
document.getElementById("multiplication").innerHTML = `${number_one} * ${number_one} = ${result_multi} multiplicação`;
document.getElementById("potentiation").innerHTML = `${number_one} ** ${number_one} = ${result_pot} potencialização`;
document.getElementById("rooting").innerHTML = `${number_four} **(1/2) = ${result_rooting} radiciação(no javascript fazemos o inverso da potência, dividindo sempre o número 1 pelo número que desejamos calcular a raiz.)`;


/*---Condições*/

idade = 2022 - 1990;
up_age = "Eu tenho mais que 21 anos de idade";
down_age = "Eu tenho menos que 21 anos de idade";

if(idade>21){
  document.getElementById("age-one").innerHTML = up_age;
}
else if(idade<21){
  document.getElementById("age-one").innerHTML = down_age;
}