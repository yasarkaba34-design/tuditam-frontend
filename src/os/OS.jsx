// FILE: src/os/OS.jsx

import React from "react";
import Bootloader from "../boot/Bootloader";

export default function OS() {
  return (
    <div style={{ background: "#000", color: "gold", minHeight: "100vh", padding: "50px" }}>
      <h1>YKOS OS</h1>
      <p>Yaşar Kaba Okuma Sistemi — İşletim Sistemi Kabuk Motoru</p>

      <div style={{ marginTop: "40px" }}>
        <Bootloader />
      </div>
    </div>
  );
}
// FILE: src/os/OS.jsx

import WindowManager from "./WindowManager";
import Bootloader from "../boot/Bootloader";

export default function OS() {
  return (
    <div style={{ background: "#000", color: "gold", minHeight: "100vh", padding: "50px" }}>
      <h1>YKOS OS</h1>
      <p>Semiyotik İşletim Sistemi Kabuk Motoru</p>

      <WindowManager>
        <div title="Bootloader">
          <Bootloader />
        </div>
      </WindowManager>
    </div>
  );
}
// FILE: src/os/OS.jsx

import Desktop from "./Desktop";

export default function OS() {
  return <Desktop />;
}
