import './styles.css';
import home from './modules/home';
import menu from './modules/menu';
import about from './modules/about';

const content = document.querySelector('#content');
content.appendChild(home);

document.querySelector('#goto-home').addEventListener('click', () => {
    emptyPage();
    setPage(home);
});
document.querySelector('#goto-menu').addEventListener('click', () => {
    emptyPage();
    setPage(menu);
});
document.querySelector('#goto-about').addEventListener('click', () => {
    emptyPage();
    setPage(about);
});


function setPage(page){
    content.appendChild(page);
}

function emptyPage(){
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}