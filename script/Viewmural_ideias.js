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
                            <div class="profile-ideia" id="profile_ideia_${id}">
                                <div class="name-user">
                                    <strong>Fabrícia Resende</strong>
                                    <span>@fabricia.resende</span>
                                </div>
                                <div class="profile-ideia-img ">
                                    <img src="img/fr.png" alt="">
                                </div>
                            </div>
                            <p>${ideia.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="detal-idea">
                            <div class="bottom-content">
                                <span>${ideia.date}</span>

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

        // Adiciona um event listener para cada div "profile-ideia"
        const profileIdeia = document.querySelector(`#profile_ideia_${id}`);
        profileIdeia.addEventListener("click", () => {
            // alert(`#profile_ideia_${id}`);
            // Seleciona a div "card-profile" e adiciona a classe "active"
            const cardProfile = document.querySelector(".card-profile");
            cardProfile.classList.add("active");
            // cardProfile.classList.toggle("active");
        });
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

const btn_interest = document.getElementById('btn-profile');

btn_interest.addEventListener('click', () => {
    alert("Demonstração de interesse realizado com sucesso!");

});

const muralIdeia = document.querySelector(".toggle-profile");
const cardProfile = document.querySelector(".card-profile");
muralIdeia.addEventListener('click', () => {
    cardProfile.classList.toggle("active");
    // muralIdeia.classList.add("active");
});


// -------Leitura de arquivos_teste

