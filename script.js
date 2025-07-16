document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll(".tab");

  tabs.forEach(button => {
    button.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      sections.forEach(sec => sec.classList.add("hidden"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.remove("hidden");
    });
  });

  document.getElementById("promo-banner").innerHTML = new Date().getDay() === 2
    ? '<div class="item"><h2>Terça-feira Maluca: Clone em dobro!</h2></div>'
    : new Date().getDay() === 3
    ? '<div class="item"><h2>Quarta-feira Maluca: Sucos pela metade do preço!</h2></div>'
    : new Date().getDay() === 5
    ? '<div class="item"><h2>Sexta-feira Maluca: X-Burguer por R$19,90!</h2></div>'
    : '';

  const generateItems = (container, img, name, desc, price, count) => {
    let html = "";
    for (let i = 0; i < count; i++) {
      html += `<div class="item">
        <img src="${img}" alt="${name}">
        <h2>${name}</h2>
        <p>${desc}</p>
        <span>${price}</span>
      </div>`;
    }
    container.innerHTML = html;
  };

  generateItems(document.getElementById("cardapio"), "hamburguer.png", "X-Burguer", "Pão brioche, carne, queijo, alface, tomate, molho especial.", "R$ 24,90", 20);
  generateItems(document.getElementById("clones"), "hamburguer.png", "Clone Duplo", "Compre 1 e leve 2 - Hambúrguer duplo com cheddar e maionese.", "R$ 29,90", 10);

  const bebidasContainer = document.getElementById("bebidas");
  for (let i = 0; i < 5; i++) {
    bebidasContainer.innerHTML += `<div class="item">
      <img src="suco.png" alt="Suco">
      <h2>Suco Natural</h2>
      <p>Sabores diversos - 300ml</p>
      <span>R$ 6,00</span>
    </div>`;
  }
  for (let i = 0; i < 5; i++) {
    bebidasContainer.innerHTML += `<div class="item">
      <img src="refrigerante.png" alt="Refrigerante">
      <h2>Refrigerante Lata</h2>
      <p>Coca, Fanta, Guaraná, Pepsi - 350ml</p>
      <span>R$ 5,00</span>
    </div>`;
  }

  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main-content");
  let startY = null;

  window.handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  window.handleTouchMove = (e) => {
    if (!startY) return;
    let currentY = e.touches[0].clientY;
    if (startY - currentY > 50) {
      splash.classList.add("hidden");
      main.classList.remove("hidden");
    }
  };
});
