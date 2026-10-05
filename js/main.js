/**
 * VESSEL STEWARD — mobile menu
 * Waits for components.js to inject the header before wiring up.
 */
document.addEventListener("components:ready", function () {
  var toggle = document.getElementById("nav-toggle");
  var close = document.getElementById("nav-close");
  var menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    var firstLink = menu.querySelector("a");
    if (firstLink) firstLink.focus();
  }
  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    toggle.focus();
  }

  toggle.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
  });
});
