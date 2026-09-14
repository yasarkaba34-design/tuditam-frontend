function BubbleView({ bubble }) {
  const style = {
    left: bubble.position.x + "px",
    top: bubble.position.y + "px",
    backgroundColor: bubble.resonance.color,
    animationDuration: `${1 / bubble.resonance.frequency}s`,
    opacity: bubble.resonance.intensity
  };

  return <div className="bubble" style={style}></div>;
}
