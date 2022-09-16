import Notiflix from 'notiflix';

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

  removeQuantity(quantity) {
    if (quantity > this.quantity) {
      Notiflix.Notify.failure(`${quantity} больше чем кол-во имеющего товара`);
      return '';
    }
    this.quantity -= quantity;
  }
}
