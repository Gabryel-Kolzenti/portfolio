
const form = document.querySelector('form');


function recebeEventoForm (evento) {   
evento.preventDefault ();  //para prevenir a funcao padrao de recarregar a pag ao clicar no input 'submit'
}
form.addEventListener(`submit`, recebeEventoForm);


function Geral(params) {
    

    var div = document.querySelector('.textAnimation');
    var textos = ['FullStack', 'Analista de dados'];
    
    function escrever(str, done) {
        var index = 0;
        var tipo = setInterval(function() {
            if (index >= str.length) {
                clearInterval(tipo);
                return setTimeout(done, 2200);
            }
            div.innerHTML += str[index++];
        }, 130);
    }
    
    function limpar(done) {
        var texto = div.innerHTML;
        var index = texto.length;
        var tipo = setInterval(function() {
            if (index <= 0) {
                clearInterval(tipo);
                return setTimeout(done, 700);
            }
            div.innerHTML = texto.slice(0, --index);
        }, 100);
    }
    
    function rodape(conteudos) {
        var atual = -1;
        function prox() {
            if (++atual >= conteudos.length) atual = 0;
            escrever(conteudos[atual], function() {
                limpar(prox);
            });
        }
        prox();
    }
    
    rodape(textos);
    }
    
    setTimeout(Geral, 1700)
