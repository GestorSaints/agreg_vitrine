
let currentSlide = 0;

const slidesContainer =
document.getElementById('slides');

const productsGrid =
document.getElementById('products-grid');

let totalSlides = 0;

/* CARREGAR PRODUTOS */

fetch('produtos.json')

.then(resposta => resposta.json())

.then(produtos => {

  /* GERAR SLIDES */

  produtos.forEach(produto => {

    slidesContainer.innerHTML += `

      <div class="slide">

        <img src="${produto.imagem}">

        <div class="slide-overlay">

          <div class="slide-content">

            <h2>
              ${produto.nome}
            </h2>

            <p>
              Coleção AGREG Premium
            </p>

          </div>

        </div>

      </div>

    `;

  });

  /* CONTAR SLIDES */

  totalSlides =
  document.querySelectorAll('.slide').length;

  /* GERAR PRODUTOS */

  produtos.forEach(produto => {

    productsGrid.innerHTML += `

      <div class="product-card">

        <img src="${produto.imagem}">

        <div class="product-info">

          <h3>
            ${produto.nome}
          </h3>

          <p>
            ${produto.preco.toLocaleString('pt-BR', {
              style:'currency',
              currency:'BRL'
            })}
          </p>

          <button>
            Ver Produto
          </button>

        </div>

      </div>

    `;

  });

  /* AUTO SLIDE */

  setInterval(nextSlide, 5000);

});

/* FUNÇÕES DO CAROUSEL */

function updateSlide(){

  slidesContainer.style.transform =
  `translateX(-${currentSlide * 100}%)`;
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= totalSlides){
    currentSlide = 0;
  }

  updateSlide();
}

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = totalSlides - 1;
  }

  updateSlide();
}