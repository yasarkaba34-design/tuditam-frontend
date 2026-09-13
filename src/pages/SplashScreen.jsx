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
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          textShadow: "0 0 20px gold",
          marginBottom: "40px",
        }}
      >
        YKOS
      </h1>

      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "3px solid gold",
          boxShadow: "0 0 40px gold",
          animation: "pulse 2s infinite",
        }}
      ></div>

      <button
        onClick={() => navigate("/anasayfa")}
        style={{
          marginTop: "40px",
          backgroundColor: "gold",
          color: "black",
          padding: "12px 28px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 0 20px gold",
        }}
      >
        Devam Et
      </button>

      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 20px gold; }
            50% { box-shadow: 0 0 60px gold; }
            100% { box-shadow: 0 0 20px gold; }
          }
        `}
      </style>
    </div>
  );
}
