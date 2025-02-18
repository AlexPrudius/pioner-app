export default function Background() {
  return (
    <img
      src="/pioner-app/photo/city.jpg"
      alt=""
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        // objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
