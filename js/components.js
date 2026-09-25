/**
 * VESSEL STEWARD — shared header & footer
 * Edit the markup here once; it renders on every page that includes
 * this file and has <div id="site-header"></div> / <div id="site-footer"></div>.
 */
(function () {
  var NAV_LINKS = [
    { href: "stewardship.html", label: "Stewardship" },
    { href: "restoration-care.html", label: "Restoration & Care" },
    { href: "our-work.html", label: "Our Work" },
  ];

  function currentPage() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function navItems(forMobile) {
    var page = currentPage();
    return NAV_LINKS.map(function (link) {
      var current = link.href === page;
      return (
        '<li><a href="' + link.href + '"' +
        (current ? ' aria-current="page"' : "") +
        ">" + link.label + "</a></li>"
      );
    }).join("");
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    el.innerHTML =
      '<header class="site-header">' +
      '<div class="wrap">' +
      '<a class="wordmark" href="index.html">VESSEL <span>STEWARD</span></a>' +
      '<nav class="nav-primary" aria-label="Primary">' +
      "<ul>" + navItems() + "</ul>" +
      "</nav>" +
      '<a class="btn btn-primary header-cta" href="contact.html">Talk to a Vessel Steward</a>' +
      '<button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="mobile-menu">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
      '<span class="visually-hidden">Menu</span>' +
      "</button>" +
      "</div>" +
      "</header>" +
      '<div class="mobile-menu" id="mobile-menu">' +
      '<div class="mobile-menu__top wrap">' +
      '<a class="wordmark" href="index.html">VESSEL <span>STEWARD</span></a>' +
      '<button class="mobile-menu__close" id="nav-close">' +
      '<span class="visually-hidden">Close menu</span>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" style="width:20px;height:20px"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      "</button>" +
      "</div>" +
      '<nav class="wrap" aria-label="Mobile">' +
      "<ul>" + navItems(true) + "</ul>" +
      '<div class="cta-row">' +
      '<a class="btn btn-primary" href="contact.html">Talk to a Vessel Steward</a>' +
      "</div>" +
      "</nav>" +
      "</div>";
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<footer class="site-footer">' +
      '<div class="wrap">' +
      '<div class="footer-grid">' +
      '<div>' +
      '<a class="wordmark" href="index.html">VESSEL <span>STEWARD</span></a>' +
      '<p class="footer-tagline">Your boat, looked after.</p>' +
      '<p class="footer-note">Preventive vessel care, restoration and ongoing stewardship on O\u02bbahu, Hawai\u02bbi.</p>' +
      "</div>" +
      '<div class="footer-col">' +
      "<h4>Site</h4>" +
      "<ul>" +
      '<li><a href="stewardship.html">Stewardship</a></li>' +
      '<li><a href="restoration-care.html">Restoration &amp; Care</a></li>' +
      '<li><a href="our-work.html">Our Work</a></li>' +
      '<li><a href="about.html">About</a></li>' +
      '<li><a href="contact.html">Contact</a></li>' +
      "</ul>" +
      "</div>" +
      '<div class="footer-col">' +
      "<h4>Get in touch</h4>" +
      "<ul>" +
      '<li><a href="contact.html">Talk to a Vessel Steward</a></li>' +
      '<li><a href="privacy.html">Privacy Policy</a></li>' +
      "</ul>" +
      "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      '<span>&copy; <span id="year"></span> Vessel Steward. O\u02bbahu, Hawai\u02bbi.</span>' +
      "</div>" +
      "</div>" +
      "</footer>";
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    document.dispatchEvent(new CustomEvent("components:ready"));
  });
})();
