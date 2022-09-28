const measur = ['кг', 'л', 'г'];

const products = [
  {
    shortName: 'Сардельки «Алан»',
    fullName: `Сардельки «Алан» «Ретро» з вершками в/ґ н/о
    Сардельки «Алан» «Ретро» з вершками в/ґ н/о`,
    measur: measur[0],
    volume: 500,
    price: 200,
    img: {
      url: 'https://content.silpo.ua/sku/ecommerce/7/545x440wwm/72620_545x440wwm_f865a87e-2cfd-cd86-37ea-15160792313c.png',
      alt: 'food',
    },
    quantity: 32,
  },
  {
    shortName: 'Cola',
    fullName: 'Напій Coca-Cola',
    measur: measur[1],
    volume: 1,
    price: 25,
    img: {
      url: 'https://content.silpo.ua/sku/ecommerce/48/545x440wwm/486807_545x440wwm_ebd928d0-8826-3ba2-fb22-33e4c8209e5d.png',
      alt: 'water',
    },
    quantity: 23,
  },
  {
    shortName: 'Pasta ZARA',
    fullName: 'Вироби макаронні Pasta ZARA «Рісіні»',
    measur: measur[2],
    volume: 500,
    price: 38,
    img: {
      url: 'https://content.silpo.ua/sku/ecommerce/59/545x440wwm/599480_545x440wwm_34dd450c-0aaa-3129-2e57-0066c33c8539.png',
      alt: 'food',
    },
    quantity: 12,
  },
  {
    shortName: 'кус-кус',
    fullName: 'Крупа «Премія»® пшенична кус-кус',
    measur: measur[2],
    volume: 500,
    price: 29,
    img: {
      url: 'https://content.silpo.ua/sku/ecommerce/85/545x440wwm/856915_545x440wwm_30d66171-8349-3a1a-9918-cc78e270c7cd.png',
      alt: 'food',
    },
    quantity: 13,
  },
  {
    shortName: 'Пиво Captain Jack',
    fullName: 'Пиво Captain Jack Orange світле',
    measur: measur[1],
    volume: 0.3,
    price: 49,
    img: {
      url: 'https://content.silpo.ua/sku/ecommerce/91/545x440wwm/911040_545x440wwm_693ef8b2-0fd6-9f88-4129-1d1770b9a984.png',
      alt: 'beer',
    },
    quantity: 12,
  },
];

export default products;
