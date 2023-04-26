
const cardsContainer = document.querySelector(".cards-container:nth-of-type(1) .swiper-wrapper");
const cardsContainer2 = document.querySelector(".cards-container:nth-of-type(2) .swiper-wrapper");
const cardsContainer3 = document.querySelector(".cards-container:nth-of-type(3) .swiper-wrapper");


fetch("pessoas.json")
    .then(response => response.json())
    .then(data => {
        data.pessoas.forEach((pessoas, index) => {
            const card = document.createElement("div");
            card.classList.add("card", "swiper-slide");
            let gender = pessoas.genero === "f" ? "Profa. " : "Prof. ";

            card.innerHTML = `
            <div class="cards--project">

                <div class="card-box-proj">
                    <div class="image-box">
                        <img src="${pessoas.imagem}" alt="${pessoas.titulo}" />         
                    </div>
                    <div class="project-details"><h2>${pessoas.titulo}</h2></div>
                    <div class="profile-details">
                        <div class="name-job">
                            <h3 class="name">${gender + pessoas.nome}</h3>
                            <h4 class="job">Depart. de ${pessoas.departamento}</h4>
                        </div>
                    </div>
                </div>
                <div class="btn-showDiv"><i class='bx bx-info-circle'></i>
                </div>
                <div class="card-show">
                    <div class="info">
                        <h2>${pessoas.titulo}</h2>
                        <p>${pessoas.descricao}</p>
                        <p>Depart. de ${pessoas.departamento}</p>
                        <p>${gender + pessoas.nome}</p>
                        <p>Linhas de pesquisa</p>
                        <ul class="linhas-pesquisas">
                        <li>Primeira pesquisa</li>
                        <li>Segunda pesquisa</li>
                        <li>Terceira pesquisa</li>
                        </ul>
                        <p>Data final:${pessoas.data}</p>
                        <button class="btn-cad">Cadastrar-se</button>
                    </div>
                </div>

            </div>
            `;
            const card_show = card.querySelector('.card-show');

            card.addEventListener('click', () => {
                card_show.classList.toggle('show');
            });

            // card.addEventListener('mouseout', () => {
            //     card_show.classList.remove('show');
            // });



            cardsContainer.appendChild(card);
            const cardShow = card.querySelector('.card-show');
            card.insertBefore(cardShow, card.firstChild);
        });
    })
    .catch(error => console.error(error));

// PARA O CARD 2

fetch("pessoas.json")
    .then(response => response.json())
    .then(data => {
        const projetosInativos = data.pessoas.filter(pessoa => pessoa.status === "ativo");
        projetosInativos.forEach((pessoas, index) => {
            const card = document.createElement("div");
            card.classList.add("card", "swiper-slide");
            let gender = pessoas.genero === "f" ? "Profa. " : "Prof. ";

            card.innerHTML = `
            <div class="cards--project">

                <div class="card-box-proj">
                    <div class="image-box">
                        <img src="${pessoas.imagem}" alt="${pessoas.titulo}" />         
                    </div>
                    <div class="project-details"><h2>${pessoas.titulo}</h2></div>
                    <div class="profile-details">
                        <div class="name-job">
                            <h3 class="name">${gender + pessoas.nome}</h3>
                            <h4 class="job">Depart. de ${pessoas.departamento}</h4>
                        </div>
                    </div>
                </div>
                <div class="btn-showDiv"><i class='bx bx-info-circle'></i>
                </div>
                <div class="card-show">
                    <div class="info">
                        <h2>${pessoas.titulo}</h2>
                        <p>${pessoas.descricao}</p>
                        <p>Depart. de ${pessoas.departamento}</p>
                        <p>${gender + pessoas.nome}</p>
                        <p>Linhas de pesquisa</p>
                        <ul class="linhas-pesquisas">
                        <li>Primeira pesquisa</li>
                        <li>Segunda pesquisa</li>
                        <li>Terceira pesquisa</li>
                        </ul>
                        <p>Data final:${pessoas.data}</p>
                        <button class="btn-cad">Cadastrar-se</button>
                    </div>
                </div>

            </div>
            `;
            const card_show = card.querySelector('.card-show');

            card.addEventListener('click', () => {
                card_show.classList.toggle('show');
            });
            cardsContainer2.appendChild(card);
            const cardShow = card.querySelector('.card-show');
            card.insertBefore(cardShow, card.firstChild);
        });
    })
    .catch(error => console.error(error));







// PARA O CARD 3

fetch("pessoas.json")
    .then(response => response.json())
    .then(data => {
        const projetosInativos = data.pessoas.filter(pessoa => pessoa.status === "inativo");
        projetosInativos.forEach((pessoas, index) => {
            const card = document.createElement("div");
            card.classList.add("card", "swiper-slide");
            let gender = pessoas.genero === "f" ? "Profa. " : "Prof. ";

            card.innerHTML = `
            <div class="cards--project">

                <div class="card-box-proj">
                <div class="image-box imagem-inativa">
                <img src="${pessoas.imagem}" alt="${pessoas.titulo}" />
              </div>
                    <div class="project-details"><h2>${pessoas.titulo}</h2></div>
                    <div class="profile-details">
                        <div class="name-job">
                            <h3 class="name">${gender + pessoas.nome}</h3>
                            <h4 class="job">Depart. de ${pessoas.departamento}</h4>
                        </div>
                    </div>
                </div>
                <div class="btn-showDiv"><i class='bx bx-info-circle'></i>
                </div>
                <div class="card-show">
                    <div class="info">
                        <h2>${pessoas.titulo}</h2>
                        <p>${pessoas.descricao}</p>
                        <p>Depart. de ${pessoas.departamento}</p>
                        <p>${gender + pessoas.nome}</p>
                        <p>Linhas de pesquisa</p>
                        <ul class="linhas-pesquisas">
                        <li>Primeira pesquisa</li>
                        <li>Segunda pesquisa</li>
                        <li>Terceira pesquisa</li>
                        </ul>
                        <p>Data final:${pessoas.data}</p>
                        <button class="btn-cad">Cadastrar-se</button>
                    </div>
                </div>

            </div>
            `;
            const card_show = card.querySelector('.card-show');

            card.addEventListener('click', () => {
                card_show.classList.toggle('show');
            });
            cardsContainer3.appendChild(card);
            const cardShow = card.querySelector('.card-show');
            card.insertBefore(cardShow, card.firstChild);
        });
    })
    .catch(error => console.error(error));

//////////////////////SLIDES//////////////////////

var swiper1 = new Swiper(".cards-container:nth-of-type(1) .slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".cards-container:nth-of-type(1) .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".cards-container:nth-of-type(1) .swiper-button-next",
        prevEl: ".cards-container:nth-of-type(1) .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper2 = new Swiper(".cards-container:nth-of-type(2) .slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".cards-container:nth-of-type(2) .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".cards-container:nth-of-type(2) .swiper-button-next",
        prevEl: ".cards-container:nth-of-type(2) .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper3 = new Swiper(".cards-container:nth-of-type(3) .slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".cards-container:nth-of-type(3) .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".cards-container:nth-of-type(3) .swiper-button-next",
        prevEl: ".cards-container:nth-of-type(3) .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});


