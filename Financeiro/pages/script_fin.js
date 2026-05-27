function getClientes() {
  return JSON.parse(localStorage.getItem("agreg_clientes")) || [];
}

function salvarClientes(clientes) {
  localStorage.setItem("agreg_clientes", JSON.stringify(clientes));
}


// =====================================
// LINKS DO MENU ATIVO
// =====================================

const links = document.querySelectorAll(
  "header nav ul li a, .menu-sidebar ul li a"
);

links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(item => {

      item.classList.remove("active");

    });

    link.classList.add("active");

  });

});

// =====================================
// HEADER COM SOMBRA NO SCROLL
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 10){

    header.classList.add("scroll-header");

  } else {

    header.classList.remove("scroll-header");

  }

});

// =====================================
// SIDEBAR MOBILE
// =====================================

const menuMobile = document.querySelector(".menu-mobile");

const sidebar = document.querySelector(".sidebar");

const fecharSidebar = document.querySelector(".fechar-sidebar");

// ABRIR SIDEBAR

menuMobile.addEventListener("click", () => {

  sidebar.classList.add("active-sidebar");

});

// FECHAR SIDEBAR

fecharSidebar.addEventListener("click", () => {

  sidebar.classList.remove("active-sidebar");

});

// =====================================
// FECHAR SIDEBAR AO CLICAR NO LINK
// =====================================

const linksSidebar = document.querySelectorAll(
  ".menu-sidebar ul li a"
);

linksSidebar.forEach(link => {

  link.addEventListener("click", () => {

    sidebar.classList.remove("active-sidebar");

  });

});

// =====================================
// BOTÃO NOVO CLIENTE
// =====================================

const btnNovo = document.querySelector(".btn-novo");

const footerClientes = document.querySelector(".footer-clientes");

if(btnNovo && footerClientes){

  btnNovo.addEventListener("click", () => {

    footerClientes.scrollIntoView({

      behavior:"smooth"

    });

  });

}

const form = document.querySelector(".form-cliente");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const email = document.querySelector("#email").value;
    const obs = document.querySelector("#obs").value;

    const clientes = getClientes();

    const novoCliente = {
      id: Date.now(),
      nome,
      telefone,
      email,
      obs,
      status: "ativo"
    };

    clientes.push(novoCliente);
    salvarClientes(clientes);

    form.reset();

    renderClientes(); // atualiza tela
  });
}
function renderClientes() {
  const container = document.querySelector(".lista-clientes-dashboard");

  if (!container) return;

  const clientes = getClientes();

  container.innerHTML = "";

  clientes.forEach(cliente => {
    container.innerHTML += `
      <div class="cliente-card">
        <div class="cliente-info">
          <h2>${cliente.nome}</h2>
          <p><i class="fa-solid fa-phone"></i> ${cliente.telefone}</p>
          <p><i class="fa-solid fa-envelope"></i> ${cliente.email}</p>
        </div>

        <div class="cliente-status ativo">
          ${cliente.status}
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderClientes();
});