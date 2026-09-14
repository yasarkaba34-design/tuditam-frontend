import { useState, useEffect } from "react";
import { startCosmicUniverse } from "../../engine/CosmicUniverseEngine"; 

export default function AnadoluShieldInteractive() {
  const [universe, setUniverse] = useState(null);
  const [panel, setPanel] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!universe) return null;

  const glow = Math.abs(universe.cosmicWave) * 40;

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #000015, #000000)",
        color: "#fff",
        height: "900px",
        position: "relative",
        overflow: "hidden",
        padding: "20px"
      }}
    >
      <h2 style={{ textAlign: "center" }}>YKOS Anadolu Kalkanı — İnteraktif Modül</h2>

      {/* Kapadokya Jeotermal Çekirdeği */}
      <div
        onClick={() => setPanel("kapadokya")}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "140px",
          height: "140px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, #a0f, #502060)",
          boxShadow: `0 0 ${glow}px #a0f`,
          cursor: "pointer",
          animation: "pulse 3s infinite"
        }}
      ></div>

      {/* Dağ Kuşağı Kalkan Halkası */}
      <div
        onMouseEnter={() => setPanel("dag")}
        onMouseLeave={() => setPanel(null)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "380px",
          height: "380px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "4px solid #4fa3ff",
          boxShadow: `0 0 ${glow}px #4fa3ff`,
          animation: "rotate 20s linear infinite"
        }}
      ></div>

      {/* Kuzey Rüzgârı Kırıcı Bariyer */}
      <div
        onMouseEnter={() => setPanel("ruzgar")}
        onMouseLeave={() => setPanel(null)}
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          width: "500px",
          height: "40px",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(90deg, #66ccff, #ffffff, #66ccff)",
          opacity: 0.6,
          filter: `drop-shadow(0 0 ${glow}px #66ccff)`
        }}
      ></div>

      {/* Spiral Göç Akışı */}
      <svg
        onClick={() => setPanel("spiral")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer"
        }}
      >
        <path
          d="M450 450 C 600 300, 700 500, 850 350 
             C 900 300, 950 450, 850 550 
             C 750 650, 600 600, 500 700"
          stroke="#00eaff"
          strokeWidth="4"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 ${glow}px #00eaff)`,
            animation: "flow 4s infinite"
          }}
        />
      </svg>

      {/* Panel Alanı */}
      {panel && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            padding: "20px",
            background: "#111",
            borderRadius: "12px",
            boxShadow: "0 0 20px #000",
            border: "1px solid #333",
            zIndex: 10
          }}
        >
          {panel === "kapadokya" && (
            <>
              <h3>Kapadokya Jeotermal Çekirdeği</h3>
              <p>
                Volkanik tüf tabakaları, mağara sistemleri ve sıcak su damarları
                Buzul Çağı boyunca Anadolu’da yaşamı koruyan jeotermal bir enerji alanı oluşturdu.
              </p>
            </>
          )}

          {panel === "dag" && (
            <>
              <h3>Anadolu Dağ Kuşağı Kalkanı</h3>
              <p>
                Karadeniz Dağları, Toroslar, Zagros ve Ege dağ sıraları Anadolu’nun etrafında
                doğal bir savunma halkası oluşturur. Bu kalkan soğuk hava akımlarını engeller.
              </p>
            </>
          )}

          {panel === "ruzgar" && (
            <>
              <h3>Kuzey Rüzgârı Kırıcı Bariyer</h3>
              <p>
                Karadeniz Dağları kutup rüzgârlarını kırarak İç Anadolu’nun Buzul Çağı boyunca
                yaşanabilir kalmasını sağlamıştır.
              </p>
            </>
          )}

          {panel === "spiral" && (
            <>
              <h3>Buzul Çağı → Anadolu → Dünya Göç Spirali</h3>
              <p>
                Anadolu’dan başlayan kültürel dalga Güneydoğu, Uzak Asya, Afrika, Türkiye,
                Güney Avrupa ve Kafkaslara yayılan büyük bir spiral akış oluşturmuştur.
              </p>
            </>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.08); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }

          @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes flow {
            0% { stroke-opacity: 0.4; }
            50% { stroke-opacity: 1; }
            100% { stroke-opacity: 0.4; }
          }
        `}
      </style>
    </div>
  );
}
