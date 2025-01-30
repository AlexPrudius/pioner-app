export const objects = [
  {
    id: 1,
    title: "1. Жилой дом",
    mapUrl:
      '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqUhJ9D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
    description: "Описание объекта",
    images: [
      {
        url: require("../assets/images/1/2.jpg"),
        source: "https://pastvu.com/p/1416774",
      },
      {
        url: require("../assets/images/1/3.jpg"),
        source: "https://pastvu.com/p/1197538",
      },
    ],
    comments: [
      {
        text: "Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги",
        author:
          '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>',
      },
      {
        text: "Дальше, во второй квартире жил Володя Венцель. Вместе с ним в одном классе учились, а потом жили через стенку на Комсомольской 20... есть одно старое фото с ним, где он на фоне нарт стоит, а я не захотел фотографироваться. Теперь он в историю вошёл, а я только вспоминаю.",
        author:
          '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>',
      },
    ],
  },
  {
    id: 2,
    title: "2. Жилой дом",
    mapUrl:
      '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqQwY~D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
    description: "Описание обеъкта",
    images: [
      {
        url: require("../assets/images/2/1.jpg"),
        source: "https://pastvu.com/p/1136777",
      },
      {
        url: require("../assets/images/2/2.jpg"),
        source: "https://pastvu.com/p/1234914",
      },
    ],
  },
];
