import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "gold",
      }}
    >
      <h1>YKOS</h1>

      <button
        onClick={() => navigate("/anasayfa")}
        style={{
          marginTop: "20px",
          backgroundColor: "gold",
          color: "black",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Devam Et
      </button>
    </div>
  );
}
