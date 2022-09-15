import products from './products';
import Card from './card';
import createTemplate from './createTemplate';
import createElement from './createElement';

function createGoods() {
  const refs = {
    wrapGoods: document.querySelector('.goods'),
  };
  const productsArr = [];

  products.forEach(item => productsArr.push(new Card(item)));

  productsArr.forEach(item => {
    refs.wrapGoods.append(createElement(createTemplate(item)));
  });
}

export default createGoods;
