import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MapComponent() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [64.963789, 78.064739], zoom: 14 }} // Укажите нужные координаты
        width="100%"
        height="800px"
      >
        <Placemark geometry={[64.963789, 78.05539]} />
      </Map>
    </YMaps>
  );
}
