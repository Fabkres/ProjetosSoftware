const addBox = document.querySelector(".add-box"),
    popupBox = document.querySelector(".popup-box"),
    popupTitle = popupBox.querySelector("header p"),
    closeIcon = popupBox.querySelector("header .uil"),
    titleTag = popupBox.querySelector("input"),
    descTag = popupBox.querySelector("textarea"),
    addBtn = popupBox.querySelector("button");

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const ideias = JSON.parse(localStorage.getItem("ideias") || "[]");
let isUpdate = false, updateId;


addBox.addEventListener("click", () => {
    popupTitle.innerText = "Add nova ideia";
    addBtn.innerText = "Add ideia";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if (window.innerWidth > 660) titleTag.focus();
});

closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = descTag.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});

function showideias() {
    if (!ideias) return;
    document.querySelectorAll(".ideia").forEach(li => li.remove());
    ideias.forEach((ideia, id) => {
        let filterDesc = ideia.description.replaceAll("\n", '<br/>');
        let liTag = `<li class="ideia">
                        <div class="details">
                            <p>${ideia.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="detal-idea">
                            <div class="bottom-content">
                                <span>${ideia.date}</span>
                                <div class="settings">
                                    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                    <ul class="menu">
                                        <li onclick="deleteideia(${id})"><i class="uil uil-trash"></i>Deletar</li>
                                        <li onclick="updateideia(${id}, '${ideia.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Editar</li>
                                        <li onclick="sendideia(${id})"><i class='bx bx-send'></i>enviar</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="stars" id="stars-${id}">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
        star_feedback(id); // adiciona a função de estrelas para cada nota
    });
}
showideias();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}

function deleteideia(ideiaId) {
    let confirmDel = confirm("Tem certeza de que deseja excluir esta ideia?");
    if (!confirmDel) return;
    ideias.splice(ideiaId, 1);
    localStorage.setItem("ideias", JSON.stringify(ideias));
    showideias();
}

function sendideia(ideiaId) {
    confirm("ideia " + ideiaId + " enviada com sucesso!");
}

function updateideia(ideiaId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    updateId = ideiaId;
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descTag.value = description;
    popupTitle.innerText = "Atualizar uma ideia";
    addBtn.innerText = "Atualizar ideia";
}

function updateStars(ideiaId, stars) {
    // Atualiza o vetor de status de estrelas
    ideias[ideiaId].stars = stars;
    localStorage.setItem("ideias", JSON.stringify(ideias));
}

function getStars(ideiaId) {
    // Recupera a string de status de estrelas do local storage
    let starsString = localStorage.getItem(`stars-${ideiaId}`);
    // Converte a string de status de estrelas em um vetor
    let stars = JSON.parse(starsString);

    return stars;
}


function star_feedback(ideiaId) {
    // const stars = document.querySelectorAll(".stars i");
    const stars = document.querySelectorAll(`#stars-${ideiaId} i`);
    let initialStars = ideias[ideiaId].stars || [false, false, false, false, false];
    // Loop through the "stars" NodeList
    stars.forEach((star, index1) => {

        // Define o estado inicial das estrelas de acordo com o valor recuperado do local storage
        star.classList.toggle("active", initialStars[index1]);

        star.addEventListener("click", () => {
            stars.forEach((s, index2) => {
                // Ative as estrelas anteriores, bem como a estrela atual
                if (index2 <= index1) {
                    initialStars[index2] = true;
                    s.classList.add("active");
                }
                // Desative as estrelas subsequentes
                else {
                    initialStars[index2] = false;
                    s.classList.remove("active");
                }
            });


            // Atualiza o vetor de status de estrelas no local storage
            updateStars(ideiaId, initialStars);
        });
    });
}
addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim(),
        description = descTag.value.trim();

    if (title || description) {
        let currentDate = new Date(),
            month = months[currentDate.getMonth()],
            day = currentDate.getDate(),
            year = currentDate.getFullYear();

        let ideiaInfo = { title, description, date: `${month} ${day}, ${year}` }
        if (!isUpdate) {
            ideias.push(ideiaInfo);
        } else {
            isUpdate = false;
            ideias[updateId] = ideiaInfo;
        }
        localStorage.setItem("ideias", JSON.stringify(ideias));
        showideias();
        closeIcon.click();
    }
});


// ---------cadastro------------

var btnBox = document.querySelector(".btn-box");
var modal_wrapper = document.querySelector(".modal-wrapper");
var shadow = document.querySelector(".shadow");

btnBox.addEventListener("click", function () {
    modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function () {
    modal_wrapper.classList.remove("active");
})
