export const objects = [
  {
    id: 1,
    title: "1. Жилой дом",
    map: {
      src: "https://yandex.ru/map-widget/v1/?um=constructor%3Acc8f3d426f6ba3909ca88d94a2ef72ad5d9fbcbac28514f958372dfa979af6ad&amp",
      width: "100%", // или "988", если хотите конкретную ширину
      height: "400", // или "630", если нужна другая высота
      frameBorder: "1", // здесь значение строки "1" или "0"
      allowFullScreen: true,
      style: { position: "relative" },
    },
    description: "Описание объекта",
    images: [
      {
        // Используйте new URL(...) если требуется, либо просто путь
        url: "path/to/your/image1.jpg",
        source: "https://pastvu.com/p/1416774",
      },
      {
        url: "path/to/your/image2.jpg",
        source: "https://pastvu.com/p/1197538",
      },
    ],
    comments: [
      {
        text: "Дом Мокроусовых. Там жили мой друг, Олег Мокроусов ...",
        author:
          '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>',
      },
      // и другие комментарии
    ],
  },
  {
    id: 2,
    title: "2. Жилой дом",
    map: {
      src: "https://yandex.ru/map-widget/v1/-/CCUmqQwY~D",
      width: "100%",
      height: "400",
      frameBorder: "1",
      allowFullScreen: true,
      style: { position: "relative" },
    },
    description: "Описание обеъкта",
  },
];
