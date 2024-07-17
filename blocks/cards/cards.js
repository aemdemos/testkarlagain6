
export default function decorate(block) {
  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    card.classList.add('card');

    const imageContainer = card.querySelector('picture');
    if (imageContainer) {
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('card-image');
      imgDiv.appendChild(imageContainer);
      card.insertAdjacentElement('afterbegin', imgDiv);
    }

    const contentContainer = card.querySelector('ul');
    if (contentContainer) {
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('card-content');
      contentDiv.appendChild(contentContainer);
      card.insertAdjacentElement('beforeend', contentDiv);
    }
  });
}
