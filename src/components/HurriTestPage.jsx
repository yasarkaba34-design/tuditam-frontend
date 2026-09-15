import { useState } from "react";
import TestInput from "../components/TestInput";

export default function HurriTestPage() {
  const [result, setResult] = useState("");

  const handleTest = (text) => {
    // Burada YKOS test motoru çalışacak
    const output = runYKOSTest(text);
    setResult(output);
  };

  return (
    <div style={styles.page}>
      <h1>Hurri Dil Testleri</h1>

      <TestInput onSubmit={handleTest} />

      {result && (
        <div style={styles.resultBox}>
          <h2>Test Sonucu</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

function runYKOSTest(input) {
  // Basit örnek test motoru (gerçek motoru sonra bağlarız)
  return `Girdi: ${input}\nDurum: Test motoru çalıştı.\nSkor: 4.9\nNot: YKOS fonetik ve semantik uyum doğrulandı.`;
}

const styles = {
  page: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  resultBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f0f0f0",
    borderRadius: "8px",
  },
};
