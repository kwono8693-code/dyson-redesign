function initHeaderMenu() {

  const header = document.querySelector("header");
  const menuItems = document.querySelectorAll(".menu-item");
  const depth2Menus = document.querySelectorAll(".depth2");

  if (!header || menuItems.length === 0) return;

  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {

      const target = item.dataset.menu;

      header.classList.add("open");

      depth2Menus.forEach(menu => {
        menu.classList.toggle(
          "active",
          menu.dataset.target === target
        );
      });

    });
  });

  header.addEventListener("mouseleave", () => {
    header.classList.remove("open");

    depth2Menus.forEach(menu => {
      menu.classList.remove("active");
    });
  });

}