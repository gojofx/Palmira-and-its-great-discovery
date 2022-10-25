const modeOrange = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

modeOrange.addEventListener('click', e =>{
    body.classList.toggle('darkMode');
    store(body.classList.contains('darkMode'));

});

function load(){
    const darkmode = localStorage.getItem('darkMode');
    if(!darkmode){
        store('false');
    }else if (darkmode == 'true'){
        body.classList.add('darkMode')
    }
}

function store(value){
    localStorage.setItem('darkMode',value);
}
