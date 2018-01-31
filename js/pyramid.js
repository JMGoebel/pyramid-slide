const rangeElement = document.querySelector('#select-height');
const selectElement = document.querySelector('#select-block');
const controller = document.querySelector('#control-bar');
const pyramid = document.querySelector('#pyramid');

// Helper: Make Elements
const create = (type, cl) => {
  const el = document.createElement(type);
  el.className = cl;
  return el;
};

// Build Pyramid
const build = (block, height) => {
  // Clear privious
  pyramid.innerHTML = '';

  let row = '';
  // Place blocks
  for (let x = 0; x < height; x += 1) {
    row = create('div', 'row');
    for (let y = height - 1; y > -2; y -= 1) {
      if (y <= x) {
        row.appendChild(create('span', `block ${block}`));
      } else {
        row.appendChild(create('span', 'block'));
      }
    }
    pyramid.appendChild(row);
  }
};

// Controller
controller.addEventListener('input', () => {
  document.querySelector('#height-display').innerHTML = rangeElement.value;
  build(selectElement.value, rangeElement.value);
});

// INIT
build(selectElement.value, rangeElement.value);
