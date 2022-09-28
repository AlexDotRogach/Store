function createTemplate({
  shortName = '',
  fullName = '',
  measur = '',
  volume = 0,
  price = 0,
  url = '',
  alt = '',
  quantity = 0,
}) {
  return `
      <div class="goods__img"><img src="${url}" alt="${alt}"></div>
      <div class="goods__title">${shortName}</div>
      <div class="goods__info">
        <div class="goods__quantity">Есть: ${quantity},</div>
        <div class="goods__type">${volume} ${measur}</div>
      </div>
      <div class="goods__control">
        <div class="goods__price">${price} грн</div>
        <button class="goods__btn">Купить</button>
      </div>
    `;
}

export default createTemplate;
