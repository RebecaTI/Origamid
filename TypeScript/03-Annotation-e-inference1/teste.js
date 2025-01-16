"use strict";
document.addEventListener('DOMContentLoaded', () => {
    function initMenuDropDown() {
        const dropdownMenus = document.querySelector('[data-dropdown] button');
        const linguasDropdown = document.querySelector('.dropdown-linguas');
        if (dropdownMenus && linguasDropdown) {
            dropdownMenus.addEventListener('click', () => {
                linguasDropdown.classList.toggle('active');
            });
        }
    }
    // Inicializa o menu dropdown
    initMenuDropDown();
});
const objetoQualquer = {
    nome: 'Thiago',
    raposo: 68 + 1
};
let nome2 = 'alagoano';
