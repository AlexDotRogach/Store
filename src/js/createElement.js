function createElement(html) {
  const newElement = document.createElement('div');
  newElement.classList.add('goods__wrapper');
  newElement.innerHTML = html;

  return newElement;
}

export default createElement;
