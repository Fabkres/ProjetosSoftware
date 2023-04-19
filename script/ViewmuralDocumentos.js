let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 23,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}`
    // #7d2ae8
    circularProgress.style.background = `conic-gradient(#00eeff ${progressStartValue * 3.6}deg, #1f242d 0deg)`

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

const list = document.querySelectorAll('.box-doc');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));


const tabela1 = document.getElementById("table1");
const tabela2 = document.getElementById("table2");
const tabela3 = document.getElementById("table3");
const tabela4 = document.getElementById("table4");
/////////////////////////////////////////////////
const btnTab1 = document.getElementById("showItemTable1");
const btnTab2 = document.getElementById("showItemTable2");
const btnTab3 = document.getElementById("showItemTable3");
const btnTab4 = document.getElementById("showItemTable4");


tabela1.classList.remove('active');
tabela2.classList.add('active');
tabela3.classList.add('active');
tabela4.classList.add('active');

// seleciona o elemento pelo ID e adiciona um ouvinte de evento
document.getElementById("bx1").addEventListener("click", function () {
    tabela1.classList.remove('active');
    tabela2.classList.add('active');
    tabela3.classList.add('active');
    tabela4.classList.add('active');
    ////////////////////////////////
    btnTab1.classList.remove('active');
    btnTab2.classList.remove('active');
    btnTab3.classList.remove('active');
    btnTab4.classList.remove('active');

});
document.getElementById("bx2").addEventListener("click", function () {
    tabela1.classList.add('active');
    tabela2.classList.remove('active');
    tabela3.classList.add('active');
    tabela4.classList.add('active');
    ////////////////////////////////
    btnTab1.classList.add('active');
    btnTab2.classList.add('active');
    btnTab3.classList.remove('active');
    btnTab4.classList.remove('active');
});
document.getElementById("bx3").addEventListener("click", function () {
    tabela1.classList.add('active');
    tabela2.classList.add('active');
    tabela3.classList.remove('active');
    tabela4.classList.add('active');
    ////////////////////////////////
    btnTab1.classList.add('active');
    btnTab2.classList.remove('active');
    btnTab3.classList.add('active');
    btnTab4.classList.remove('active');
});
document.getElementById("bx4").addEventListener("click", function () {
    tabela1.classList.add('active');
    tabela2.classList.add('active');
    tabela3.classList.add('active');
    tabela4.classList.remove('active');
    ////////////////////////////////
    btnTab1.classList.add('active');
    btnTab2.classList.remove('active');
    btnTab3.classList.remove('active');
    btnTab4.classList.add('active');
});



function configurarBotaoMostrarItens(botaoId, tabelaId) {
    var tabela = document.getElementById(tabelaId).getElementsByTagName("tr");
    var mostrarTodos = false;

    // Oculta todas as linhas, exceto as primeiras três
    for (var i = 4; i < tabela.length; i++) {
        tabela[i].style.display = "none";
    }

    // Adiciona um ouvinte de eventos para o botão
    document.getElementById(botaoId).addEventListener("click", function () {
        if (!mostrarTodos) {
            // Exibe todas as linhas
            for (var i = 0; i < tabela.length; i++) {
                tabela[i].style.display = "table-row";
            }
            mostrarTodos = true;
            this.innerHTML = "mostrar menos";
        } else {
            // Oculta todas as linhas, exceto as primeiras três
            for (var i = 4; i < tabela.length; i++) {
                tabela[i].style.display = "none";
            }
            mostrarTodos = false;
            this.innerHTML = "mostrar mais";
        }
    });
}
configurarBotaoMostrarItens("showItemTable1", "table1");
configurarBotaoMostrarItens("showItemTable2", "table2");
configurarBotaoMostrarItens("showItemTable3", "table3");
configurarBotaoMostrarItens("showItemTable4", "table4");