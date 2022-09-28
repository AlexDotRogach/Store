import render from '../renderCard';

function btnBuy(e, refs, productsArr) {
  const wrap = e.target.parentElement.parentElement;

  if (wrap.classList.contains('goods__wrapper')) {
    // click our card
    productsArr.map(item => {
      // our instance of card
      if (
        item.shortName === wrap.querySelector('.goods__title').textContent // looking for our current card
      ) {
        const template = document.querySelector('#modal-buy'); // get template of modal buy
        refs.body.append(template.content.cloneNode(true));
        const wrapModal = document.querySelector('.modal-buy__wrapper');

        wrapModal.querySelector('.buy__btn').addEventListener('click', () => {
          const valueQuantity = wrapModal.querySelector('.buy__input').value;

          item.buyQuantity(refs, valueQuantity); // invoke method that delete several goods

          refs.body.removeChild(wrapModal); // close window of buy

          render(refs, productsArr); // make render on the page so that we can see our changing
        });
      }
    });
  }
}

export default btnBuy;
