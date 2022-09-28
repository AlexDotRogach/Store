import Notiflix from 'notiflix';
// this class creates our card of product
export default class Card {
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

    this.addTresh(refs.tresh, quantity);

    this.quantity -= quantity;
  }

  addTresh(parent, quantity) {
    parent.insertAdjacentHTML(
      'afterbegin',
      `<div class="tresh__item">
        <div class="tresh__item-name">${this.shortName}</div>
        <div class="tresh__item-quantity"><b>quantity: </b>${quantity}</div>
        <div class="tresh__item-price"><b>price:</b> ${this.price}</div>
        <div class="tresh__item-full"><b>sum:</b> ${this.price * quantity}</div>
        <button class="tresh__item-remove">remove</button>
      </div>
      `
    );
  }

  validateQuantity(quantity) {
    if (quantity > this.quantity) {
      Notiflix.Notify.failure(`${quantity} больше чем кол-во имеющего товара`);
      return true;
    }
  }
}
