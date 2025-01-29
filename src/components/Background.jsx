export default function Background() {
  return (
    <img
      src="/pioner-app/public/photo/city.png"
      alt=""
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "160%",
        width: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
