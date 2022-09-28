import products from '../data/products';
import Card from '../class/Card';
import render from '../renderCard';
import btnBuy from '../click/btnBuy';

function createGoods() {
  const refs = {
    wrapGoods: document.querySelector('.goods'),
    body: document.querySelector('body'),
    tresh: document.querySelector('.tresh__container'),
    btnTresh: document.querySelector('.tresh'),
    treshCount: document.querySelector('.tresh__counter'),
  };
  const productsArr = [];
  // create instances of products
  products.forEach(item => productsArr.push(new Card(item)));

  render(refs, productsArr);

  refs.wrapGoods.addEventListener('click', clickGoods);
  refs.btnTresh.addEventListener('click', e => clickTresh(e, refs.tresh));

  function clickGoods(e) {
    if (e.target.tagName === 'BUTTON') {
      btnBuy(e, refs, productsArr);
    }
  }

  function clickTresh(e, container) {
    const tar = e.target;

    if (tar.classList.contains('tresh')) container.classList.toggle('show');

    if (tar.classList.contains('tresh__item-remove')) {
      const onlyNum = new RegExp(/\d+/);

      const itemsTresh = [...tar.parentNode.children]
        .filter(
          item =>
            item.classList.contains('tresh__item-name') ||
            item.classList.contains('tresh__item-quantity')
        )
        .map(item => item.textContent);

      productsArr.forEach(item => {
        if (item.shortName === itemsTresh[0])
          item.quantity += +onlyNum.exec(itemsTresh[1]);
      });

      tar.parentElement.remove();

      render(refs, productsArr);
    }
  }
}

export default createGoods;
