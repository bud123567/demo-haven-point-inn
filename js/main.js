(() => {
  "use strict";

  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (!toggle || !menu) {
    return;
  }

  const menuLinks = menu.querySelectorAll("nav a");
  const inertRegions = document.querySelectorAll("[data-inert-on-menu]");
  const desktopQuery = window.matchMedia("(min-width: 60rem)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isOpen = false;
  let closeTimer = null;

  const focusableItems = () => Array.from(
    menu.querySelectorAll("a[href], button:not([disabled]):not([tabindex='-1'])")
  ).filter((item) => !item.hidden && item.getAttribute("aria-hidden") !== "true");

  const setBackgroundInert = (value) => {
    inertRegions.forEach((region) => {
      region.inert = value;
    });
  };

  const openMenu = () => {
    if (isOpen) {
      return;
    }

    window.clearTimeout(closeTimer);
    isOpen = true;
    menu.hidden = false;
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    setBackgroundInert(true);

    window.requestAnimationFrame(() => {
      menu.classList.add("is-open");
      const firstItem = focusableItems()[0];
      if (firstItem) {
        firstItem.focus();
      }
    });
  };

  const closeMenu = (restoreFocus = true) => {
    if (!isOpen) {
      return;
    }

    isOpen = false;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    setBackgroundInert(false);

    closeTimer = window.setTimeout(() => {
      menu.hidden = true;
    }, reducedMotionQuery.matches ? 0 : 240);

    if (restoreFocus) {
      toggle.focus();
    }
  };

  const handleMenuKeys = (event) => {
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const items = focusableItems();
    if (items.length === 0) {
      event.preventDefault();
      return;
    }

    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    }
  };

  document.addEventListener("hpi:open-menu", openMenu);
  document.addEventListener("hpi:close-menu", () => closeMenu());
  menuLinks.forEach((link) => link.addEventListener("click", () => closeMenu()));
  document.addEventListener("keydown", handleMenuKeys);

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu(false);
    }
  });
})();
