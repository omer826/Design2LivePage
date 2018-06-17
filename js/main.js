'use strict';

var gSubMenus = [];

function init() {
    var gSubMenus = createSubMenu();
    renderSubMenus(gSubMenus);
}

function toggleMenu(elBtn) {
    document.querySelector('.main-menu').classList.toggle('open');
    elBtn.classList.toggle('fa-window-close');
    // fa-window-close
}

function createSubMenu() {
    return ['October 2016', 'January 2017', 'April 2017', 'July 2017'];
}

function renderSubMenus(menus) {
    var elAMenuItem = document.querySelector('.sub-menu');
    var strHtml = ``;
    menus.forEach(function (item) {
        strHtml += `<li class="sub-menu-item flex column space-around align-items"> ${item}  </li>`
    });
    elAMenuItem.innerHTML = strHtml;
}

function openSubMenu() {
    var elSubMenu = document.querySelector('.sub-menu');
    elSubMenu.classList.add('openSubMenu');
}

function closeSubMenu() {
    var elSubMenu = document.querySelector('.sub-menu');
    elSubMenu.classList.remove('openSubMenu');
}

function toggleSubMenu() {
    var elSubMenu = document.querySelector('.sub-menu');
    elSubMenu.classList.toggle('openSubMenu');
}

function readMore(el) {
    var elModal = document.querySelector('.modal');
    elModal.classList.add('open-modal');
}

function onSubmit(elBtn) {
    var elModal = document.querySelector('.modal');
    var elInputEmailVal = document.querySelector('.input-email').value;

    elModal.classList.remove('open-modal');
}