const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

// Menu toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navegation");
let main = document.querySelector(".main");


toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    // suBmenu.classList.remove('active');
};


// ------ICONE DARK/LIGHT--------

var icon = document.getElementById("icon");
icon.onclick = function () {
    var setStyle = 0;
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "img/moon.png";
    } else {
        icon.src = "img/sun.png"
    }
    return setStyle
}



function menuToggle() {
    const toggleMenu = document.querySelector('.menu-icon');
    toggleMenu.classList.toggle('active')
}


///// CONTROL NAVBAR
let home_icon = document.querySelector('.card-mean');
let note_icon = document.querySelector('.card-note');
let ideia_icon = document.querySelector('.card-ideia');

let Mural_Ideia = document.querySelector('.Mural_Ideia_Geral');
let icon_rotate = document.querySelector('.Mural_Ideia_Geral');



let suBmenu = document.querySelector(".sub-menu");
// seleciona o elemento pelo ID e adiciona um ouvinte de evento
document.getElementById("li1").addEventListener("click", function () {
    home_icon.classList.remove('active');
    note_icon.classList.remove('active');
    ideia_icon.classList.remove('active');
    suBmenu.classList.remove('active');
    subPhoto.classList.remove('active');
    subProfile.classList.remove('active');
    subTerm.classList.remove('active');
});

document.getElementById("li2").addEventListener("click", function () {
    home_icon.classList.add('active');
    note_icon.classList.add('active');
    ideia_icon.classList.remove('active');
    suBmenu.classList.remove('active');
    subPhoto.classList.remove('active');
    subProfile.classList.remove('active');
    subTerm.classList.remove('active');
});

document.getElementById("li4").addEventListener("click", function () {
    ideia_icon.classList.add('active');
    home_icon.classList.add('active');
    note_icon.classList.remove('active');
    suBmenu.classList.remove('active');
    subPhoto.classList.remove('active');
    subProfile.classList.remove('active');
    subTerm.classList.remove('active');
});

document.getElementById("li5").addEventListener("click", function () {
    ideia_icon.classList.remove('active');
    home_icon.classList.add('active');
    note_icon.classList.remove('active');
    suBmenu.classList.remove('active');
    subPhoto.classList.remove('active');
    subProfile.classList.remove('active');
    subTerm.classList.remove('active');
});


document.getElementById("li6").addEventListener("click", function () {
    suBmenu.classList.toggle('active');
    navigation.classList.add("active");
    main.classList.add("active");
    // removendo a classe 'active' da lista de submenus
    const listSub = document.querySelectorAll('.sub-list');
    listSub.forEach((item) =>
        item.classList.remove('active'));

});



/// sub menu

let subProfile = document.querySelector('.config-profile');
let subPhoto = document.querySelector('.config-photo');
let subTerm = document.querySelector('.config-term');


const listSub = document.querySelectorAll('.sub-list');
function activeLinkSub() {
    listSub.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}


listSub.forEach((item) => item.addEventListener('click', activeLinkSub));


document.getElementById("li61").addEventListener("click", function () {
    ideia_icon.classList.remove('active');
    home_icon.classList.add('active');
    note_icon.classList.remove('active');
    subPhoto.classList.remove('active');
    subTerm.classList.remove('active');
    subProfile.classList.add('active');
});

document.getElementById("li62").addEventListener("click", function () {
    ideia_icon.classList.remove('active');
    home_icon.classList.add('active');
    note_icon.classList.remove('active');
    subPhoto.classList.add('active');
    subTerm.classList.remove('active');
    subProfile.classList.remove('active');

});

document.getElementById("li63").addEventListener("click", function () {
    ideia_icon.classList.remove('active');
    home_icon.classList.add('active');
    note_icon.classList.remove('active');
    subPhoto.classList.remove('active');
    subTerm.classList.add('active');
    subProfile.classList.remove('active');

});

// 


