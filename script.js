// Variaveis para as opções
var quantidade_a = 0;
var quantidade_b = 0;
var quantidade_c = 0;
var quantidade_d = 0;
var quantidade_e = 0;

// Função para cada select
function contarOpcao(select) {
    if (select.value == 'a') {
        quantidade_a++;
    }if (select.value == 'b') {
        quantidade_b++;
    }if (select.value == 'c') {
        quantidade_c++;
    }if (select.value == 'd') {
        quantidade_d++;
    }if (select.value == 'e') {
        quantidade_e++;
    }  
}

function lerSelects(){
    const selects = document.querySelectorAll('select');
    selects.forEach(contarOpcao);
    console.log(quantidade_a)
    if(quantidade_a>quantidade_b && quantidade_a>quantidade_c && quantidade_a>quantidade_d && quantidade_a>quantidade_e){
        document.getElementById("tela").innerHTML = "Quantidade de A foi "+ quantidade_a;
    }
    if(quantidade_b>quantidade_a && quantidade_b>quantidade_c && quantidade_b>quantidade_d && quantidade_b>quantidade_e){
        document.getElementById("tela").innerHTML = "Quantidade de B foi "+ quantidade_b;
    }
    if(quantidade_c>quantidade_a && quantidade_c>quantidade_b && quantidade_c>quantidade_d && quantidade_c>quantidade_e){
        document.getElementById("tela").innerHTML = "Quantidade de C foi "+ quantidade_c;
    }
    if(quantidade_d>quantidade_a && quantidade_d>quantidade_b && quantidade_d>quantidade_c && quantidade_d>quantidade_e){
        document.getElementById("tela").innerHTML = "Quantidade de D foi "+ quantidade_d;
    }
    if(quantidade_e>quantidade_a && quantidade_e>quantidade_b && quantidade_e>quantidade_c && quantidade_e>quantidade_d){
        document.getElementById("tela").innerHTML = "Quantidade de E foi "+ quantidade_e;
    }

}



































