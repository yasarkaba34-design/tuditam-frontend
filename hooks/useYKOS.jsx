import { useYKOS } from "../hooks/useYKOS"; // veya dosyanın konumuna göre doğru göreceli yol

export const BubbleMatrixView = () => {
  const ykos = useYKOS();

  useEffect(() => {
    ykos.setFlow();
  }, []);

  return <canvas id="bubble-matrix" />;
};
