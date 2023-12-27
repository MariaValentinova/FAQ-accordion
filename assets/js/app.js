document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  const collapse = item.querySelector('.accordion-collapse');

  button.addEventListener('click', function () {
    resetIcons();
    toggleAccordion(button);
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      resetIcons();
      toggleAccordion(button);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      resetIcons();
      item.focus();
    }
  });

  item.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') {
      const nextItem = item.nextElementSibling;
      if (nextItem) {
        nextItem.querySelector('.accordion-button').focus();
      }
    } else if (e.key === 'ArrowUp') {
      const prevItem = item.previousElementSibling;
      if (prevItem) {
        prevItem.querySelector('.accordion-button').focus();
      }
    }
  });

  collapse.addEventListener('hidden.bs.collapse', function () {
    button.classList.add('collapsed');
    button.querySelector('.card__icon__plus').classList.remove('d-none');
    button.querySelector('.card__icon__minus').classList.add('d-none');
  });

  collapse.addEventListener('shown.bs.collapse', function () {
    button.classList.remove('collapsed');
    button.querySelector('.card__icon__plus').classList.add('d-none');
    button.querySelector('.card__icon__minus').classList.remove('d-none');
  });
});

function toggleAccordion(button) {
  const collapse = button.nextElementSibling;
  if (collapse.classList.contains('show')) {
    collapse.classList.remove('show');
  } else {
    collapse.classList.add('show');
  }
}

function resetIcons() {
  const allPlusIcons = document.querySelectorAll('.card__icon__plus');
  const allMinusIcons = document.querySelectorAll('.card__icon__minus');

  allPlusIcons.forEach(icon => {
    icon.classList.remove('d-none');
  });

  allMinusIcons.forEach(icon => {
    icon.classList.add('d-none');
  });
}

// Agregar outline solo cuando se usa el teclado
accordionItems.forEach(item => {
  item.addEventListener('focusin', function () {
    this.classList.add('keyboard-focus');
  });

  item.addEventListener('focusout', function () {
    this.classList.remove('keyboard-focus');
  });
});

// Agregar clase 'keyboard-focus' solo cuando se use el teclado
document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });

  document.body.addEventListener('keydown', function() {
    document.body.classList.remove('using-mouse');
  });

  accordionItems.forEach(item => {
    item.addEventListener('focusin', function () {
      if (!document.body.classList.contains('using-mouse')) {
        this.classList.add('keyboard-focus');
      }
    });

    item.addEventListener('focusout', function () {
      this.classList.remove('keyboard-focus');
    });
  });
});