import YKOSLogPanel from "../components/YKOSLogPanel";

export default function LogPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>YKOS – Gerçek Zamanlı Motor Logu</h1>
      <YKOSLogPanel />
    </div>
  );
}
