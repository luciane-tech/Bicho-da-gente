// =========================================================
// Pata Verde — Projeto conceito Life Creative (marca fictícia)
// Em um site real, coloque aqui o WhatsApp da clínica (só números, com DDI e DDD)
// e os botões passam a abrir a conversa com a mensagem pronta.
// =========================================================
const WHATSAPP = ""; // ex.: "5511999999999"

// Aviso flutuante (usado no modo demonstração)
const toastEl = document.getElementById("toast");
let toastTimer;
function showToast(text) {
  if (!toastEl) return;
  toastEl.textContent = text;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 4200);
}

// Botões de WhatsApp com mensagem pronta (atributo data-wa)
document.querySelectorAll("[data-wa]").forEach((el) => {
  const msg = el.getAttribute("data-wa") || "Olá! Vim pelo site.";
  if (WHATSAPP) {
    el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  } else {
    el.removeAttribute("target");
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showToast(`Demonstração: aqui abriria o WhatsApp da clínica com a mensagem “${msg}”`);
    });
  }
});

// Links de demonstração (telefone, Instagram, Google, mapa)
document.querySelectorAll("[data-demo]").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showToast(el.getAttribute("data-demo"));
  })
);

// Menu mobile
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Destaca o dia de hoje na tabela de horários
const row = document.querySelector(`#hoursTable tr[data-day="${new Date().getDay()}"]`);
if (row) row.classList.add("today");

// Ano no rodapé
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
