/**
 * VESSEL STEWARD — accordions
 *
 * Markup: a container with class "accordion" and
 * data-accordion="single" (only one row open at a time — used for
 * Restoration & Care) or data-accordion="multi" (rows open
 * independently — used for the Stewardship checklists). Each row is
 * ".accordion-row" containing one ".accordion-trigger" button
 * (aria-expanded, aria-controls) and one ".accordion-panel" with an
 * ".accordion-panel__inner" wrapper.
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion").forEach(function (group) {
    var mode = group.getAttribute("data-accordion") || "multi";
    var triggers = group.querySelectorAll(".accordion-trigger");

    function setOpen(trigger, open) {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      trigger.setAttribute("aria-expanded", String(open));
      if (!panel) return;
      if (open) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0px";
      }
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        if (mode === "single" && !isOpen) {
          triggers.forEach(function (t) {
            if (t !== trigger) setOpen(t, false);
          });
        }
        setOpen(trigger, !isOpen);
      });
    });

    // Keep open panels correctly sized if content reflows (e.g. fonts loading, resize)
    window.addEventListener("resize", function () {
      triggers.forEach(function (t) {
        if (t.getAttribute("aria-expanded") === "true") setOpen(t, true);
      });
    });
  });
});
