export function BubbleMatrix({ bubbles }) {
  return (
    <div className="bubble-matrix">
      {bubbles.map(b => (
        <BubbleView key={b.id} bubble={b} />
      ))}
    </div>
  );
}
