/**
 * VESSEL STEWARD — interactions
 * Mobile menu + FAQ accordion. Waits for components.js to inject
 * the header before wiring up the menu.
 */
document.addEventListener("components:ready", function () {
  var toggle = document.getElementById("nav-toggle");
  var close = document.getElementById("nav-close");
  var menu = document.getElementById("mobile-menu");

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

  if (toggle && menu) {
    toggle.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
    });
  }
});

// Accordion (FAQ) — works on any .accordion-item on the page
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.style.maxHeight = expanded ? "0px" : panel.scrollHeight + "px";
    });
  });
});
