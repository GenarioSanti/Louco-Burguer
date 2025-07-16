
let yStart = null;

function handleTouchStart(evt) {
  yStart = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!yStart) return;

  let yEnd = evt.touches[0].clientY;
  let yDiff = yStart - yEnd;

  if (yDiff > 50) {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
    }
    yStart = null;
  }
}

window.onload = () => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.addEventListener('click', () => {
      splash.classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
    });
  }

  showPromoOfDay();
  showTab('cardapio');

  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("onclick").split("'")[1];
      showTab(tabId);
    });
  });
};

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.add('hidden'));

  const activeTab = document.getElementById(tabId);
  if (activeTab) activeTab.classList.remove('hidden');
}

function showPromoOfDay() {
  const banner = document.getElementById('promo-banner');
  const day = new Date().getDay();
  let promoText = '';

  if (day === 2) promoText = '🔥 TERÇA-FEIRA MALUCA! Promoções incríveis hoje!';
  if (day === 3) promoText = '🔥 QUARTA-FEIRA MALUCA! Confira nossos descontos!';
  if (day === 5) promoText = '🔥 SEXTA-FEIRA MALUCA! Aproveite as ofertas!';

  if (promoText) {
    banner.innerHTML = '<div class="item"><h2>' + promoText + '</h2></div>';
  }
}
