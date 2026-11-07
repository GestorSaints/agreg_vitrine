"use strict";

// ======================================================
// EMBAIXADORES DO REI
// SISTEMA PRINCIPAL DE NAVEGAÇÃO
// ======================================================


// ======================================================
// 1. CADASTRO DOS QUATRO POSTOS
// ======================================================

const postos = [

    {
        id: "escudeiro",
        numero: "01",
        nome: "Embaixador Escudeiro",
        descricao: "Primeiro posto de progressão.",

        temas: [
            "Os postos da organização",
            "A insígnia dos Embaixadores do Rei",
            "As cores da organização",
            "As quatro regras dos ER nos esportes",
            "História da organização nos Estados Unidos",
            "História dos Batistas: nossa origem",
            "O plano de salvação",
            "Movimento Moderno de Missões",
            "Serviço Real",
            "Solenidades dos ER"
        ]
    },

    {
        id: "arauto",
        numero: "02",
        nome: "Embaixador Arauto",
        descricao: "Segundo posto de progressão.",

        temas: [
            "A faixa e a mensagem do evangelho para o mundo perdido",
            "História da organização: o pioneiro",
            "História dos Batistas no Brasil",
            "Tradutores da Bíblia",
            "Heróis da fé",
            "O ministério de Jesus",
            "As viagens missionárias de Paulo",
            "Biografias missionárias",
            "O Embaixador do Rei e o cuidado com a criação",
            "Uma embaixada padrão"
        ]
    },

    {
        id: "senior",
        numero: "03",
        nome: "Embaixador Sênior",
        descricao: "Terceiro posto de progressão.",

        temas: [
            "A coroa e os cinco ideais dos ER",
            "História da organização: o início no Brasil",
            "Principais doutrinas bíblicas seguidas pelos Batistas",
            "Princípios Batistas",
            "Batistas brasileiros: comunhão e cooperação",
            "Oração",
            "Estudo da Bíblia",
            "Missões no Brasil",
            "Princípios bíblicos da mordomia",
            "Laboratório de Serviço Real"
        ]
    },

    {
        id: "emerito",
        numero: "04",
        nome: "Embaixador Emérito",
        descricao: "Quarto posto de progressão.",

        temas: [
            "O ramo de louro",
            "História da organização: jubileus e congressos",
            "História dos Batistas: eles fizeram a diferença",
            "As marcas de um discípulo de Cristo",
            "Liderança discipuladora",
            "Vivendo uma vida íntegra: bullying e vícios",
            "Os Batistas pelo mundo: UBLA e ABM",
            "Um só Deus e muitas religiões",
            "Vocação e chamado",
            "Serviço Real: vida na Igreja"
        ]
    }

];


// ======================================================
// 2. ELEMENTOS PRINCIPAIS
// ======================================================

const telas = document.querySelectorAll("[data-tela]");

const navegacao = document.getElementById(
    "navegacao-principal"
);

const menuAlternar = document.getElementById(
    "menuAlternar"
);

let postoAtual = null;


// ======================================================
// 3. SISTEMA DE NAVEGAÇÃO
// ======================================================

function mostrarTela(nomeTela) {

    telas.forEach(function (tela) {

        const ativa = tela.dataset.tela === nomeTela;

        tela.hidden = !ativa;

        tela.classList.toggle("ativa", ativa);

    });


    document.querySelectorAll("[data-nav]").forEach(function (botao) {

        botao.classList.toggle(
            "ativo",
            botao.dataset.nav === nomeTela
        );

    });


    navegacao.classList.remove("aberta");

    menuAlternar.setAttribute(
        "aria-expanded",
        "false"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ======================================================
// 4. CRIAÇÃO DOS CARTÕES DOS POSTOS
// ======================================================

function criarCartoesPostos() {

    const grade = document.getElementById("gradePostos");

    grade.innerHTML = "";


    postos.forEach(function (posto) {

        const cartao = document.createElement("button");

        cartao.type = "button";

        cartao.className = "cartao-posto";

        cartao.dataset.posto = posto.id;


        cartao.innerHTML = `

            <span class="numero-posto">
                POSTO ${posto.numero}
            </span>

            <h2>${posto.nome}</h2>

            <p>${posto.descricao}</p>

            <span class="abrir-posto">
                CONSULTAR TEMAS →
            </span>

        `;


        grade.appendChild(cartao);

    });

}


// ======================================================
// 5. ABRIR UM POSTO
// ======================================================

function abrirPosto(idPosto) {

    postoAtual = postos.find(function (posto) {

        return posto.id === idPosto;

    });


    if (!postoAtual) {

        console.error("Posto não encontrado.");

        return;

    }


    document.getElementById("tituloPosto").textContent =
        postoAtual.nome;


    document.getElementById("descricaoPosto").textContent =
        "Consulte os dez temas identificados no sumário deste posto.";


    const lista = document.getElementById("listaTemas");

    lista.innerHTML = "";


    postoAtual.temas.forEach(function (tema, indice) {

        const item = document.createElement("button");

        item.type = "button";

        item.className = "item-tema";

        item.dataset.temaIndice = indice;


        item.innerHTML = `

            <span class="numero-tema">
                ${String(indice + 1).padStart(2, "0")}
            </span>

            <span class="nome-tema">
                ${tema}
            </span>

            <span class="seta-tema">
                →
            </span>

        `;


        lista.appendChild(item);

    });


    mostrarTela("posto");

}


// ======================================================
// 6. ABRIR UM TEMA DE ESTUDO
// ======================================================
function abrirTema(indice) {
    if (!postoAtual) {
        return;
    }

    const tema = postoAtual.temas[indice];

    if (!tema) {
        return;
    }

    // Temas do posto de Escudeiro
    if (postoAtual.id === "escudeiro") {

        // Tema 1 — Os postos da organização
        if (indice === 0) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_01.html";
            return;
        }

        // Tema 2 — A insígnia dos Embaixadores do Rei
        if (indice === 1) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_02.html";
            return;
        }

        // Tema 3 — As cores da organização
        if (indice === 2) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_03.html";
            return;
        }

        // Tema 4 — As regras nos esportes
        if (indice === 3) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_04.html";
            return;
        }

        // Tema 5 — História da Organização: Inicio nos Estados Unidos
        if (indice === 4) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_05.html";
            return;
        }

        // Tema 6 — História dos Batistas : Nossa Origem
        if (indice === 5) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_06.html";
            return;
        }
    
        // Tema 7 — Plano de Salvação
        if (indice === 6) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_07.html";
            return;
        }

        // Tema 8 — Movimento Moderno de Missões
        if (indice === 7) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_08.html";
            return;
        }

         // Tema 9 — Movimento Moderno de Missões
        if (indice === 8) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_09.html";
            return;
        }

         // Tema 10 — Formação e Programção da Organização
        if (indice === 9) {
            window.location.href =
                "conteudos/biblico/escudeiro/tema_10.html";
            return;
        }
    }

    // Demais temas continuam com o comportamento anterior
    document.getElementById("tituloTema").textContent = tema;
    mostrarTela("tema");
}


// ======================================================
// 7. EVENTOS DE NAVEGAÇÃO
// ======================================================

document.addEventListener("click", function (evento) {

    const botaoNavegacao = evento.target.closest("[data-nav]");

    const cartaoPosto = evento.target.closest("[data-posto]");

    const itemTema = evento.target.closest("[data-tema-indice]");


// Navegação principal

if (botaoNavegacao) {

    // Acesso ao ambiente de Ordem Unida
    if (botaoNavegacao.dataset.nav === "ordem") {

        window.location.href = "ordem_er.html";

        return;

    }

    // Demais telas continuam com a navegação interna
    mostrarTela(botaoNavegacao.dataset.nav);

    return;

}


    // Seleção de posto

    if (cartaoPosto) {

        abrirPosto(cartaoPosto.dataset.posto);

        return;

    }


    // Seleção de tema

    if (itemTema) {

        abrirTema(
            Number(itemTema.dataset.temaIndice)
        );

    }

});


// ======================================================
// 8. BOTÃO PARA VOLTAR AOS TEMAS
// ======================================================

document.getElementById("voltarPosto").addEventListener(
    "click",
    function () {

        mostrarTela("posto");

    }
);


// ======================================================
// 9. MENU PARA CELULARES
// ======================================================

menuAlternar.addEventListener("click", function () {

    const aberto = navegacao.classList.toggle("aberta");

    menuAlternar.setAttribute(
        "aria-expanded",
        String(aberto)
    );

});


// ======================================================
// 10. INICIALIZAÇÃO DA PLATAFORMA
// ======================================================

criarCartoesPostos();

mostrarTela("inicio");

console.log(
    "Embaixadores do Rei: plataforma inicializada com sucesso!"
);