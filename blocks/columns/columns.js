
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'columns-container';

  const textDiv = block.querySelector('.columns-text');
  const imageDiv = block.querySelector('.columns-image');

  container.appendChild(textDiv);
  container.appendChild(imageDiv);

  block.innerHTML = '';
  block.appendChild(container);
}
