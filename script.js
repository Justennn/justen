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
    console.log(quantidade_b)
    console.log(quantidade_c)
    console.log(quantidade_d)
    console.log(quantidade_e)
     atualizarPorcentagema();
     atualizarPorcentagemb();
     atualizarPorcentagemc();
     atualizarPorcentagemd();
     atualizarPorcentageme();
}

function atualizarPorcentagema(){
    const skillBar = document.getElementById('e');
    skillBar.style.width = quantidade_a*10+'%';
    skillBar.innerHTML = quantidade_a*10+'%';
}
function atualizarPorcentagemb(){
    const skillBar = document.getElementById('ex');
    skillBar.style.width = quantidade_b*10+'%';
    skillBar.innerHTML = quantidade_b*10+'%';
}
function atualizarPorcentagemc(){
    const skillBar = document.getElementById('exa');
    skillBar.style.width = quantidade_c*10+'%';
    skillBar.innerHTML = quantidade_c*10+'%';
}
function atualizarPorcentagemd(){
    const skillBar = document.getElementById('exat');
    skillBar.style.width = quantidade_d*10+'%';
    skillBar.innerHTML = quantidade_d*10+'%';
}
function atualizarPorcentageme(){
    const skillBar = document.getElementById('exata');
    skillBar.style.width = quantidade_e*10+'%';
    skillBar.innerHTML = quantidade_e*10+'%';
}
































