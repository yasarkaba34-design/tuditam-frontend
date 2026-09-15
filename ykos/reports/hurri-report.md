import TestInput from "./TestInput";

export default function HurriTestPage() {
  const handleTest = (text) => {
    console.log("Girdi:", text);
    // Burada YKOS test motoruna gönderiyorsun
  };

  return (
    <div>
      <h1>Hurri Dil Testleri</h1>
      <TestInput onSubmit={handleTest} />
    </div>
  );
}
