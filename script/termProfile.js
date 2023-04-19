function checkeMe() {
    var checkB1 = document.getElementById("checkbox1");
    var checkB2 = document.getElementById("checkbox2");
    var btn_checked = document.getElementById("submit-btn");
    if (checkB1.checked == true && checkB2.checked == true) {
        btn_checked.style.disable = "false";
        btn_checked.classList.add("active");
    } else {
        btn_checked.style.disable = "true";
        btn_checked.classList.remove("active");
    }
}
