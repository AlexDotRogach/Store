import Notiflix from 'notiflix';
// this class creates our card of product
export default class Card {
  #reg = {
    num: new RegExp(/\d+/),
  };

  constructor({
    shortName = '',
    fullName = '',
    measur = '',
    volume = 0,
    price = 0,
    img: { url = '', alt = '' } = {},
    quantity = 0,
  }) {
    this.shortName = shortName;
    this.fullName = fullName;
    this.measur = measur;
    this.volume = volume;
    this.price = price;
    this.url = url;
    this.alt = alt;
    this.quantity = quantity;
  }

  buyQuantity(refs, quantity) {
    if (this.validateQuantity(quantity)) return '';

    this.addBasket(refs.basket, quantity);

    this.quantity -= quantity;
  }

  addBasket(parent, quantity) {
    // if goods are already here
    if ([...parent?.children].length > 0) {
      for (const basket of [...parent.children]) {
        if (this.shortName === basket.children[0].textContent) {
          const newQuantity =
            +this.#reg.num.exec(basket.children[1].textContent)[0] + +quantity;
          basket.children[1].innerHTML = `<b>quantity: </b> ${newQuantity}`;
          return '';
        }
      }
    }

    parent.insertAdjacentHTML(
      'afterbegin',
      `<div class="basket__item">
        <div class="basket__item-name">${this.shortName}</div>
        <div class="basket__item-quantity"><b>quantity: </b>${quantity}</div>
        <div class="basket__item-price"><b>price:</b> ${this.price}</div>
        <div class="basket__item-full"><b>sum:</b> ${
          this.price * quantity
        }</div>
        <button class="basket__item-remove">remove</button>
      </div>
      `
    );
  }

  validateQuantity(quantity) {
    if (quantity > this.quantity) {
      Notiflix.Notify.failure(`${quantity} больше чем кол-во имеющего товара`);
      return true;
    }

    if (isNaN(+quantity)) {
      Notiflix.Notify.failure(`${quantity} не число`);
      return true;
    }
  }
}
