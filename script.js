const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.querySelector('.menu-items');

    menuIcon.addEventListener('click', () => {
        menu.classList.add('active');
        menuIcon.classList.add('hide');
        closeIcon.classList.add('show');
    });

    closeIcon.addEventListener('click', () => {
        menu.classList.remove('active');
        closeIcon.classList.remove('show');
        menuIcon.classList.remove('hide');
    });