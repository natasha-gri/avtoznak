  'use strict';

const modalAdd = document.querySelector('.modal__add'), //модальное окно
	addAd = document.querySelector('.add__ad');	//кнопка

addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide');
});

addAd.addEventListener('click', (event) =>{
	const target = event.target;

	if(target.classList.contains('modal__close') || target === modalAdd) {
		modalAdd.classList.add('hide');
	};
});