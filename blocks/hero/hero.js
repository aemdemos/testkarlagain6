
export default function decorate(block) {
  // Create a new div to hold the heading
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('hero-heading');

  // Create the heading element
  const heading = document.createElement('h1');
  heading.textContent = 'Testing a Headline.';
  headingDiv.appendChild(heading);

  // Prepend the heading div to the block
  block.insertBefore(headingDiv, block.firstChild);

  // Set the background image
  block.style.backgroundImage = 'url(http://localhost:3000/media_1061934561e8a4f01907e616a0ce0e4b74d63b92e.jpeg?width=750&format=jpeg&optimize=medium)';
  block.style.backgroundSize = 'cover';
  block.style.backgroundPosition = 'center';
}
