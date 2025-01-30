import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MapComponent() {
  return (
    <YMaps>
      {/* <Map
        defaultState={{ center: [64.963789, 78.064739], zoom: 14 }} // Укажите нужные координаты
        width="100%"
        height="800px"
      >
        <Placemark geometry={[64.963789, 78.05539]} />
      </Map> */}
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acc8f3d426f6ba3909ca88d94a2ef72ad5d9fbcbac28514f958372dfa979af6ad&amp;source=constructor"
        width="100%"
        height="800px"
        frameborder="0"
      ></iframe>
    </YMaps>
  );
}
