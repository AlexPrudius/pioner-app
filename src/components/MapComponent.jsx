import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MapComponent() {
  return (
    <YMaps>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acee1a73fc21c0c650aeb9f5ccfbde4fbc6c6ddf50e0476f2f680115018a03287&amp;source=constructor"
        width="100%"
        height="100%"
      ></iframe>
    </YMaps>
  );
}
