import products from './products';
import Card from './card';
import render from './renderCard';

function createGoods() {
  const refs = {
    wrapGoods: document.querySelector('.goods'),
    body: document.querySelector('body'),
  };
  const productsArr = [];
  // create instances of products
  products.forEach(item => productsArr.push(new Card(item)));

  refs.wrapGoods.addEventListener('click', btnBuy);

  render(refs, productsArr);

  function btnBuy(e) {
    if (e.target.tagName === 'BUTTON') {
      const wrap = e.target.parentElement.parentElement;
      if (wrap.classList.contains('goods__wrapper')) {
        productsArr.map(item => {
          if (
            item.shortName === wrap.querySelector('.goods__title').textContent
          ) {
            const template = document.querySelector('#modal-buy');
            refs.body.append(template.content.cloneNode(true));
            const wrapModal = document.querySelector('.modal-buy__wrapper');

            wrapModal
              .querySelector('.buy__btn')
              .addEventListener('click', () => {
                item.removeQuantity(
                  wrapModal.querySelector('.buy__input').value
                );

                refs.body.removeChild(wrapModal);

                render(refs, productsArr);
              });
          }
        });
      }
    }
  }
}

export default createGoods;
