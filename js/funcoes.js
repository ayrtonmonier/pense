
/*
-----------------------------------------------------
FONÇÕES JAVASCRIPT
-----------------------------------------------------

Funções desenvolvidas por:

Ayrton Monier

Objetivo;
Portal PensE

Empresa: VAT Tecnologia S.A 

-------------------------------------------------------



/*FUNÇÃO DE CONTROLE DO MENU DROP/DOWN

No CSS, a classe ".menu1-lista-drop-down" é por padrão adicionada ao elemento <ol>
deixando o menu em blocos de linha. Abaixo de 647px de viewport, a média querie referente
modifica o valor desta classe fazendo esta lista sumir com a propriedade:valor  display:none. 

Ainda nesta média querie, os elementos <span> (botoes) são programados para serem mostrados e 
a classe ".menu1-lista-down" é configurada para mostrar uma lista em bloco.

O javascrip se encarrega de adicionar/remover as classes ".menu1-lista-drop-down" e ".menu1-lista-down"
dependendo do viewport em questao.

*/
function controlesMenuDropDown(){

    //armazena por padrão que os MENUS 1 e 2 não estao expandidos
    var menu1Expandido = false;
    var menu2Expandido = false;


    var controle = {

        //controle ao CLICAR NO BOTÃO do menu 1
        expandeEscondeMenu1: function(){

            //caso NÃO ESTEJA expandido
            if(menu1Expandido==false){

                //armazena a o elemento (ol) que está com a classe ".menu1-lista-drop-down"
                menu1 = document.querySelector(".menu1-lista-drop-down");

                //remove a classe ".menu1-lista-drop-down" do elemento
                menu1.classList.remove("menu1-lista-drop-down");

                //adciona a classe ".menu1-lista-down" no elemento (mostra expandido)
                menu1.classList.add("menu1-lista-down");

                //armazena que o menu está expandido
                menu1Expandido=true;

            //caso JÁ ESTEJA expandido
            }else{

                //armazena a o elemento (ol) que está com a classe ".menu1-lista-down" 
                menu1 = document.querySelector(".menu1-lista-down");

                //remove a classe ".menu1-lista-down"  do elemento
                menu1.classList.remove("menu1-lista-down");

                /*adciona a classe "menu1-lista-drop-down" no elemento 
                (mostra em linha com viewport acima de 647px ou esconde caso abaixo deste)*/ 
                menu1.classList.add("menu1-lista-drop-down");

                //armazena que não está expandido
                menu1Expandido=false;

            }
        },

        //controle ao CLICAR NO BOTÃO do menu 2
        expandeEscondeMenu2: function(){

            //caso NÃO ESTEJA expandido
            if(menu2Expandido==false){

                //armazena a o elemento (ol) que está com a classe ".menu2-lista-drop-down"
                menu2 = document.querySelector(".menu2-lista-drop-down");

                //remove a classe ".menu2-lista-drop-down" do elemento
                menu2.classList.remove("menu2-lista-drop-down");

                //adciona a classe ".menu2-lista-down" no elemento (mostra expandido)
                menu2.classList.add("menu2-lista-down");

                //armazena que o menu está expandido
                menu2Expandido=true;

            //caso JÁ ESTEJA expandido
            }else{

                //armazena a o elemento (ol) que está com a classe ".menu2-lista-down" 
                menu2 = document.querySelector(".menu2-lista-down");

                //remove a classe ".menu2-lista-down"  do elemento
                menu2.classList.remove("menu2-lista-down");

                /*adciona a classe "menu2-lista-drop-down" no elemento 
                (mostra em linha com viewport acima de 647px ou esconde caso abaixo deste)*/ 
                menu2.classList.add("menu2-lista-drop-down");

                //armazena que não está expandido
                menu2Expandido=false;
            }
        }

    }

    //eventos de clique adicionados 
    document.querySelector("#bt-menu1").addEventListener("click", controle.expandeEscondeMenu1);
    document.querySelector("#bt-menu2").addEventListener("click", controle.expandeEscondeMenu2);
}


//carrega as funções junto com a página
window.addEventListener("load",controlesMenuDropDown);
window.addEventListener("load",controlesGaleriaImagens);
window.addEventListener("load",controlesGaleriaCursos);
window.addEventListener("load",controlesPainelEncontreCursos);