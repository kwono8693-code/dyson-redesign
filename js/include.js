async function includeLayout() {

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    const response = await fetch("./components/header.html");
    headerTarget.innerHTML = await response.text();
  }

  if (footerTarget) {
    const response = await fetch("./components/footer.html");
    footerTarget.innerHTML = await response.text();
  }

  // ⭐ header 로드된 후 실행
  initHeaderMenu();

}

includeLayout();