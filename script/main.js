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



// seleciona o elemento pelo ID e adiciona um ouvinte de evento
document.getElementById("li1").addEventListener("click", function () {
    home_icon.classList.remove('active');
    note_icon.classList.remove('active');
    ideia_icon.classList.remove('active');
});

document.getElementById("li2").addEventListener("click", function () {
    home_icon.classList.add('active');
    note_icon.classList.add('active');
    ideia_icon.classList.remove('active');
});

document.getElementById("li4").addEventListener("click", function () {
    ideia_icon.classList.add('active');
    home_icon.classList.add('active');
    note_icon.classList.remove('active');
});
