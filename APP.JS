'use strict

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function) {
    Document.body.classList.toggle('dark-theme')

    var ClassName = document.body.ClassName;
    if(ClassName == 'light-theme') {
this.textContent = 'escuro';
    }
    else{
        this.textContent = 'claro';
    }
}
