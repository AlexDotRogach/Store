import createTemplate from './create/createTemplate';
import createElement from './create/createElement';

function render(refs, products) {
  refs.wrapGoods.innerHTML = '';
  products.forEach(item => {
    refs.wrapGoods.append(createElement(createTemplate(item)));
  });

  // count elements in basket
  refs.basketCount.textContent = refs.basket.children.length;

  createSum(refs);

  function createSum(refs) {
    let sum = 0;
    const onlyNum = new RegExp(/\d+/);

    [...refs.basket.children].forEach(item => {
      sum +=
        onlyNum.exec(item.children[1].textContent) *
        onlyNum.exec(item.children[2].textContent);
    });

    refs.basketSum.textContent =
      `${sum}`.length > 4 ? `${sum}`.slice(0, 4) + '...' : sum;
  }
}

export default render;
