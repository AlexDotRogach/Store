import products from '../data/products';
import Card from '../class/Card';
import render from '../renderCard';
import btnBuy from '../click/btnBuy';

function createGoods() {
  const refs = {
    wrapGoods: document.querySelector('.goods'),
    body: document.querySelector('body'),
    basket: document.querySelector('.basket__container'),
    btnbasket: document.querySelector('.basket'),
    basketCount: document.querySelector('.basket__counter'),
    basketSum: document.querySelector('.basket__sum'),
  };
  const productsArr = [];

  products.forEach(item => productsArr.push(new Card(item)));

  render(refs, productsArr);

  refs.wrapGoods.addEventListener('click', clickGoods);
  refs.btnbasket.addEventListener('click', e => clickBasket(e, refs.basket));

  function clickGoods(e) {
    if (e.target.tagName === 'BUTTON') {
      btnBuy(e, refs, productsArr);
    }
  }

  function clickBasket(e, container) {
    const tar = e.target;

    if (tar.classList.contains('basket')) container.classList.toggle('show');

    if (tar.classList.contains('basket__item-remove')) {
      const onlyNum = new RegExp(/\d+/);

      const itemsbasket = [...tar.parentNode.children]
        .filter(
          item =>
            item.classList.contains('basket__item-name') ||
            item.classList.contains('basket__item-quantity')
        )
        .map(item => item.textContent);

      productsArr.forEach(item => {
        if (item.shortName === itemsbasket[0])
          item.quantity += +onlyNum.exec(itemsbasket[1]);
      });

      tar.parentElement.remove();

      render(refs, productsArr);
    }
  }
}

export default createGoods;
