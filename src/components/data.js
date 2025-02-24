export const objects = [
  {
    id: 1,
    title: "1. Жилой дом",
    description: "Описание объекта",
    map: {
      src: "https://yandex.ru/map-widget/v1/?um=constructor%3Acc8f3d426f6ba3909ca88d94a2ef72ad5d9fbcbac28514f958372dfa979af6ad&amp;source=constructor",
      width: "100%",
      height: "400",
      frameBorder: "1",
      allowFullScreen: true,
      style: { position: "relative" },
    },
    images: [
      {
        url: './photo/2.jpg',
        source: "https://pastvu.com/p/1416774",
      },
      {
        url: './photo/3.jpg',
        source: "https://pastvu.com/p/1197538",
      },
    ],
    comments: [
      {
        text: "Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги",
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
    description: "Описание обеъкта",
    map: {
      src: "https://yandex.ru/map-widget/v1/-/CCUmqQwY~D",
      width: "100%",
      height: "400",
      frameBorder: "1",
      allowFullScreen: true,
      style: { position: "relative" },
    },
  },
];
