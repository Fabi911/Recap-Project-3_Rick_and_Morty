export function CharacterCard(character) {
  const { image, name, status, type, episode } = character;

  const card = document.createElement("ul");
  card.classList.add("card-container");

  card.innerHTML = `<li class="card">
<div class="card__image-container">
  <img
    class="card__image"
    src=${character}
    alt=${character}
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${character}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${character}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${character}</dd>
  </dl>
</div>
</li>`;
  main.appendChild(card);
}
