import { YKOS_ROOTS } from "../data/ykos_roots";
const getChainForRoot = (root) => {
  const data = YKOS_ROOTS[root.toUpperCase()];
  return data ? data.zincir : null;
};
export default function GraphMatrix({ selectedRoot }) {
  const chain = getChainForRoot(selectedRoot);

  return (
    <div className="graph-container">
      <h2>Grafik Motoru</h2>

      {chain ? (
        <div className="graph-matrix">
          {Object.entries(chain).map(([step, desc]) => (
            <div key={step} className="graph-node">
              <strong>{step}</strong>
              <br />
              {desc}
            </div>
          ))}
        </div>
      ) : (
        <div>Kök seçilmedi.</div>
      )}
    </div>
  );
}
