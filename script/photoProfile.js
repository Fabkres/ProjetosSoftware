const defaultBtn = document.querySelector("#defalt-btn");
const customBtn = document.querySelector("#custom-btn");
const wrapper = document.querySelector(".wrapper");
const cancelBtn = document.querySelector("#cancel-btn");
const img = document.querySelector(".image img");


function defaultBtnActive() {
    defaultBtn.click();
}


defaultBtn.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
        }

        cancelBtn.addEventListener("click", function () {
            img.src = "";
            wrapper.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
});


