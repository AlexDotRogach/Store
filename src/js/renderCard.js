import createTemplate from './createTemplate';
import createElement from './createElement';

function render(refs, products) {
  refs.wrapGoods.innerHTML = '';
  products.forEach(item => {
    refs.wrapGoods.append(createElement(createTemplate(item)));
  });
}

export default render;
