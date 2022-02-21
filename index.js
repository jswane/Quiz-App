console.clear();

const cardSet = document.querySelectorAll('[data-js=card]');

cardSet.forEach(card => {
  const bookmark = card.querySelector('[data-js=bookmark]');

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark-booked');
  });
});

cardSet.forEach(card => {
  const bookmark = card.querySelector('[data-js=bookmark]');
  const answerButton = card.querySelector('.card__button--show-answer');

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark-booked');
  });

  answerButton.addEventListener('click', () => {
    answerButton.classList.toggle('.background-change');

    if (answerButton.innerText === 'Show answer') {
      answerButton.innerText = 'Hide answer';
    } else {
      answerButton.innerText = 'Show answer';
    }

    answerButton.nextElementSibling.classList.toggle('hidden');
  });
});
