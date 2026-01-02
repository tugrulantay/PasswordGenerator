const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");

var gen_btn = document.getElementById("gen-btn");

gen_btn.onclick = function () {
    createPassword();
    alert("working");
};

btnEl.addEventListener("click", () => {
    createPassword();
});

function createPassword() {
    const chars_pass =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 14;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars_pass.length);
        password += chars_pass[randomNum];
    }

    inputEl.value = password;
}
