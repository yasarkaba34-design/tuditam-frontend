export default function NorthWindBreaker() {
  return (
    <div
      style={{
        width: "250px",
        height: "20px",
        background: "linear-gradient(90deg, #66ccff, #0099ff)",
        animation: "windFlow 1.5s infinite linear",
        margin: "20px auto"
      }}
    ></div>
  );
}
