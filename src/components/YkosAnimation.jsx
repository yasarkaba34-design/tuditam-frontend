import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import ykosData from "../data/ykosData.json";

export default function YkosAnimation() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: ykosData,
    });
  }, []);
  return <div ref={container} style={{ width: 800, height: 600 }} />;
}
