document.addEventListener("DOMContentLoaded",function(){

    const header = document.querySelector('header');
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
        // 헤더 열기
        header.classList.add('open');

        // 다른 메뉴 닫기
        menuItems.forEach(i => i.classList.remove('active'));

        // 현재 메뉴만 활성화
        item.classList.add('active');
        });
    });

    // header 영역을 벗어나면 전부 닫기
    header.addEventListener('mouseleave', () => {
        header.classList.remove('open');
        menuItems.forEach(i => i.classList.remove('active'));
    });

})