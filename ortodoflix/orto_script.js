// ==========================
// MENU HAMBÚRGUER
// ==========================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// ABRIR / FECHAR MENU

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

});

// FECHAR AO CLICAR FORA

overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

});

// ==========================
// FECHAR MENU AO CLICAR EM LINK
// ==========================

const menuLinks = document.querySelectorAll("#sidebar a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("active");
        overlay.classList.remove("active");

    });

});