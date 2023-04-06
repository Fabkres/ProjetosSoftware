const content = document.querySelector(".content-note");
const btnNew = document.querySelector(".addnote-content");


let items_db = localStorage.getItem("items_db")
    ? JSON.parse(localStorage.getItem("items_db"))
    : [];

const colors = ["#845EC2", "#008F7A", "#008E9B", "#FFC75F", "#FF8066", "#BA3CAF", "#2980B9", "#F39C12", "#8e44ad",
    "#27AE60", "#e74c3c", "#e84393", "#ff4757", "#ffc312", "#17c0eb", "#5c4e36", "#000"];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function loadItems() {
    content.innerHTML = "";
    verifyNulls();

    items_db.forEach((item, i) => {
        addHTML(item, i);
    });

    addEvents();
}

btnNew.onclick = () => {
    addHTML();
    addEvents();
};

function addHTML(item) {
    const div = document.createElement("div");

    div.innerHTML = `<div class="item" style="background-color: ${item?.color || "#fff"}">
                        <span class="remove">
                            <i class='bx bx-palette color-icon'></i>
                            <i class="uil uil-times"></i>
                        </span>
                        <textarea>${item?.text || ""}</textarea>
                        <input type="color" id="colorPicker" class="color-picker" style="display:none;" value="${item?.color || "#fff"}">
                    </div>`;

    content.appendChild(div);
}

function addEvents() {
    const notes = document.querySelectorAll(".item textarea");
    const remove = document.querySelectorAll(".item .remove .uil");
    const colorPickers = document.querySelectorAll(".item .color-picker");
    const colorIcons = document.querySelectorAll(".color-icon");

    notes.forEach((item, i) => {
        item.oninput = () => {
            items_db[i] = {
                text: item.value,
                color: items_db[i]?.color || item.parentElement.style.backgroundColor,
            };

            localStorage.setItem("items_db", JSON.stringify(items_db));
        };
    });

    remove.forEach((item, i) => {
        item.onclick = () => {
            content.children[i].remove();
            if (items_db[i]) {
                items_db.splice(i, 1);
                localStorage.setItem("items_db", JSON.stringify(items_db));
            }
            addEvents();
        };
    });

    colorPickers.forEach((item, i) => {
        item.oninput = () => {
            const noteItem = item.parentElement;
            noteItem.style.backgroundColor = item.value;

            items_db[i] = {
                text: noteItem.querySelector("textarea").value,
                color: item.value,
            };

            localStorage.setItem("items_db", JSON.stringify(items_db));
        };
    });

    colorIcons.forEach((icon, i) => {
        const colorPicker = icon.parentElement.parentElement.querySelector(".color-picker");
        icon.onclick = () => {
            // colorPicker.style.display = colorPicker.style.display === "none" ? "block" : "none";
            colorPicker.click();
        };
    });

}

function verifyNulls() {
    items_db = items_db.filter((item) => item);
    localStorage.setItem("items_db", JSON.stringify(items_db));
}
loadItems();

