import createTemplate from './create/createTemplate';
import createElement from './create/createElement';

function render(refs, products) {
  refs.wrapGoods.innerHTML = '';
  products.forEach(item => {
    refs.wrapGoods.append(createElement(createTemplate(item)));
  });

  // count elements in tresh
  refs.treshCount.textContent = refs.tresh.children.length;
}

export default render;
