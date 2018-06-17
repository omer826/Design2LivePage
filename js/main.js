'use strict';

var gSubMenus = [];

function init() {
    var gSubMenus = createSubMenu();
    renderSubMenus(gSubMenus);
}

function toggleMenu(elBtn) {
    document.querySelector('.main-menu').classList.toggle('open');
    elBtn.classList.toggle('fa-bars');
    elBtn.classList.toggle('fa-close');
}

function createSubMenu() {
    return ['October 2016', 'January 2017', 'April 2017', 'July 2017'];
}

function renderSubMenus(menus) {
    var elAMenuItem = document.querySelector('.sub-menu');
    var strHtml = ``;
    menus.forEach(function (item) {
        strHtml += `
        <li >
        <a  class="sub-menu-item flex column space-around align-items" href="#"> ${item} </a>
         </li>`
    });
    elAMenuItem.innerHTML = strHtml;
}

function toggleSubMenu() {
    var elSubMenu = document.querySelector('.sub-menu');
    if(elSubMenu.style.visibility === 'hidden'){
        elSubMenu.classList.toggle('openSubMenu');

    }
}

function readMore(el) {
    var elModal = document.querySelector('.modal');
    var elInforModal = document.querySelector('.modal-info');
    elModal.classList.add('open-modal');
    elInforModal.classList.add('modal-info-transform');
}

function onSubmit(elBtn) {
    event.stopPropagation();
    var elModal = document.querySelector('.modal');
    var elInputEmailVal = document.querySelector('.input-email').value;

    // elModal.classList.remove('open-modal');
}

function closeModal(ev){
    var elModal = document.querySelector('.modal');
    var elInforModal = document.querySelector('.modal-info');
    elModal.classList.remove('open-modal');
    elInforModal.classList.remove('modal-info-transform');

    
}