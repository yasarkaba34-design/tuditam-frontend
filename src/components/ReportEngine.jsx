import React, { useEffect, useState } from "react";

export default function ReportEngine() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ykos_logs") || "[]");
    setLogs(data);
  }, []);

  const countByRoot = logs.reduce((acc, log) => {
    acc[log.root] = (acc[log.root] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard-card">
      <h2>📄 Rapor Motoru</h2>

      <h3>Kök Kullanım Raporu</h3>
      {Object.entries(countByRoot).map(([root, count]) => (
        <div key={root}>
          <strong>{root}</strong>: {count} kez
        </div>
      ))}

      <h3>Toplam Kayıt</h3>
      <div>{logs.length} işlem kaydedildi.</div>
    </div>
  );
}
