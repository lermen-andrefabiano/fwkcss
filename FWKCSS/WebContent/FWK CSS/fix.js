/**
*	Autor: mauricio.araldi
*	Data: 10/04/2013
*
*	Essa fix é utilizada para fazer com os <button> e <a>, 
*	no Mobile Safari, também disparem a pseudo-classe :active
*	do CSS.
*
*	Guia de informações úteis 1.1
*/
document.addEventListener("touchstart", function(){}, true);


/**
* Autor: mauricio.araldi
* Data: 16/04/2013
*
* Esse fix é utilizado para retirar o delay dos eventos de click
* no iOS. Parece que ele remove os eventos de ontouchstart, por isso
* é preciso atenção. Uma prática recomendada é utilizar 
* ev.stopPropagation() para evitar problemas com esse fix.
*/
window.addEventListener('load', function() {
	new FastClick(document.body);
}, false);


/**
 *
 *	@author Mauricio Araldi
 *	@since 19/08/2013
 *
 *	Fix para os checkboxes gerados pelo JSF através do elemento
 *	<h:selectManyCheckbox>, que cria uma table.
 *
 *	Adiciona a classe "ativo" aos <tr> da lista de acordo com o estado
 *	do devido checkbox. Em seguida adiciona um evento nos <tr> para que eles
 *	controlem o seu estado.
 *
 *	Essa função é chamada a cada ciclo AJAX via JSF (Vide jsf-handling.js)
 */
function ativarListaCheckbox() {
	var els = document.querySelectorAll('.fix-lista-checkbox tr');

	for (var i=0; i < els.length ; i++) {
		var element = els[i];
		var checkbox = element.querySelector('input');

		//Quando inicializa a lista, se existir algum elemento marcado já, adiciona a ele
		//a classe de elemento ativo.
		if (checkbox.checked) {
			element.className += ' ativo';
		}

		//Adiciona a função que fará o controle da classe ativo no checkbox
		//Nativamente o JS controla para que a função não seja atribuída duas vezes
		element.addEventListener('click', App.Utils.ativarLabelCheckbox, false);
	}
}

//Funções que precisam ser chamadas automaticamente na inicialização da tela
window.onload = function() {
	ativarListaCheckbox();
};