// ------ICONE DARK/LIGHT--------

var icon = document.getElementById("icon");
icon.onclick = function () {
    var setStyle = 0;
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "images/moon.png";
    } else {
        icon.src = "images/sun.png"
    }
    return setStyle
}

function menuToggle() {
    const toggleMenu = document.querySelector('.menu-icon');
    toggleMenu.classList.toggle('active')
}