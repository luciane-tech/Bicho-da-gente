// =========================================================
// Bichos da Gente — scripts do site
// Número do WhatsApp em UM lugar só: altere aqui se mudar.
// =========================================================
const WHATSAPP = "5555991787275";

// Monta os links de WhatsApp com mensagem pronta (atributo data-wa)
document.querySelectorAll("[data-wa]").forEach((el) => {
  const msg = el.getAttribute("data-wa") || "Olá! Vim pelo site.";
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
});

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
const today = new Date().getDay();
const row = document.querySelector(`#hoursTable tr[data-day="${today}"]`);
if (row) row.classList.add("today");

// Ano no rodapé
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
