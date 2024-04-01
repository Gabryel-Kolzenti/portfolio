const tagAll = document.querySelector('.tagAll');
const tagHtmlCss = document.querySelector('.tagHtmlCss');
const tagJavaScript = document.querySelector('.tagJavaScript');
const tagBootstrap = document.querySelector('.tagBootstrap');

const itemHtmlCss = document.querySelectorAll('.itemHtmlCss');
const itemJavaScript = document.querySelectorAll('.itemJavaScript');
const itemBootstrap = document.querySelectorAll('.itemBootstrap');


const verMais = document.querySelector('main .alinhamento a');
const carrosselExtra = document.querySelectorAll('.previos');

tagAll.addEventListener('click', () => {
    verMais.classList.remove(`desaparece`);
    verMais.classList.add(`aparece`);

    tagAll.classList.add('tagSelecionada');
    tagHtmlCss.classList.remove('tagSelecionada');
    tagBootstrap.classList.remove('tagSelecionada');
    tagJavaScript.classList.remove('tagSelecionada');

    itemHtmlCss.forEach(item => {
        item.classList.remove('desaparece');
        item.classList.add('aparece');
    });

    itemBootstrap.forEach(item => {
        item.classList.remove('desaparece');
        item.classList.add('aparece');
    });

    itemJavaScript.forEach(item => {
        item.classList.remove('desaparece');
        item.classList.add('aparece');
    });

    carrosselExtra.forEach(item => {
        item.classList.add(`ativoPrevio`)
    })
});

tagHtmlCss.addEventListener('click', () => {
    verMais.classList.add(`desaparece`);

    tagHtmlCss.classList.add('tagSelecionada');
    tagAll.classList.remove('tagSelecionada');
    tagBootstrap.classList.remove('tagSelecionada');
    tagJavaScript.classList.remove('tagSelecionada');

    itemHtmlCss.forEach(item => {
        item.classList.remove('desaparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('aparece');
    });

    itemJavaScript.forEach(item => {
        item.classList.remove('aparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('desaparece');
    });

    itemBootstrap.forEach(item => {
        item.classList.remove('aparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('desaparece');
    });
});

tagJavaScript.addEventListener('click', () => {
    verMais.classList.add(`desaparece`);

    tagJavaScript.classList.add('tagSelecionada');
    tagHtmlCss.classList.remove('tagSelecionada');
    tagBootstrap.classList.remove('tagSelecionada');
    tagAll.classList.remove('tagSelecionada');

    itemJavaScript.forEach(item => {
        item.classList.remove('desaparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('aparece');
    });

    itemHtmlCss.forEach(item => {
        item.classList.remove('aparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('desaparece');
    });

    itemBootstrap.forEach(item => {
        item.classList.remove('aparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('desaparece');
    });
});

tagBootstrap.addEventListener('click', () => {
    verMais.classList.add(`desaparece`);

    tagBootstrap.classList.add('tagSelecionada');
    tagHtmlCss.classList.remove('tagSelecionada');
    tagAll.classList.remove('tagSelecionada');
    tagJavaScript.classList.remove('tagSelecionada');

    itemBootstrap.forEach(item => {
        item.classList.remove('desaparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('aparece');
    });

    itemHtmlCss.forEach(item => {
        item.classList.remove('aparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('desaparece');
    });

    itemJavaScript.forEach(item => {
        item.classList.remove('aparece');
        item.classList.remove(`ativoPrevio`);
        item.classList.add('desaparece');
    });
});


verMais.addEventListener('click', function() {
    if (verMais.textContent === 'Veja Mais') {
        carrosselExtra.forEach(element => {
        element.classList.remove('ativoPrevio');   
        });
        verMais.textContent = 'Ver Menos';
    } else{
        carrosselExtra.forEach(element => {
        element.classList.add('ativoPrevio');   })
        verMais.textContent = 'Veja Mais';
    }
});

