let ano;
let ano_nasc;
let idade;

ano_nasc = window.prompt("Em qual ano você nasceu?");
ano = window.prompt("EM que ano nós estamos?");

idade = (calcular_idade(ano,ano_nasc))

window.alert( "sua idade é " + idade)

function calcular_idade(ano, ano_nasc) {
    return ano - ano_nasc;
}
/*
if(calcular_idade(ano,ano_nasc < 18)){
    Alert("Menor de idade!! voce é uma criança em desenvolvimento...")
}
else if(calcular_idade(ano,ano_nasc) < 8){
    Alert("Menor de idade!! voce é um bebe ainda...")
}
else{
    alert("Você é maior de idade")
}
deixei esse codigo para usar em alguma situação especifica até demais
*/
