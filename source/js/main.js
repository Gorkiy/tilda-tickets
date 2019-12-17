'use strict';
var askSupportBlock = document.querySelector('.tickets__ask-support');

// Модальные окна
var modal = document.querySelector('.modal');
var newTicketButton = document.querySelector('.help-desk__button-new');

newTicketButton.addEventListener('click', function () {
  modal.classList.add('modal--show');
});

modal.addEventListener('click', function (evt) {
  var formBox = evt.target.closest('.modal__content');
  var closeButton = evt.target.closest('.modal__close-button');

  console.log(formBox);

  if (!formBox || closeButton) {
    modal.classList.remove('modal--show');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--show');
    modal.classList.remove('modal--show');
  }
});

// Тикеты
var tickets = document.querySelector('.tickets--full');
var ticketsCollapsed = document.querySelector('.tickets--short');
var newTicketHeadButton = document.querySelector('.tickets__head-button');

ticketsCollapsed.addEventListener('click', function (evt) {
  var list = evt.target.closest('.tickets__sort--collapsed');

  if (list) {
    ticketsCollapsed.classList.toggle('tickets--shown');
    tickets.classList.toggle('tickets--shown');
    askSupportBlock.classList.toggle('visually-hidden');
  }
});

newTicketHeadButton.addEventListener('click', function () {
  askSupportBlock.classList.toggle('visually-hidden');
  ticketsCollapsed.classList.toggle('tickets--shown');
  tickets.classList.toggle('tickets--shown');
});