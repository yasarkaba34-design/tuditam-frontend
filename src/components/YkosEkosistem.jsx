import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function YkosEkosistem() {
  const container = useRef(null);

  useEffect(() => {
    // Animasyon motorunu tetikliyoruz
    const instance = lottie.loadAnimation({
      container: container.current, // Görsel hazne
      renderer: 'svg',             // Kristal netliğinde vektör çıktısı
      loop: true,                  // Kozmik döngü sürekli dönsün
      autoplay: true,              // Sayfa açılınca otomatik başlasın
      path: '/data/ykos_core.json' // Klasördeki tam dosya yolunuz
    });

    // Sayfadan çıkıldığında belleği temizleme zırhı
    return () => instance.destroy();
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Diyagram tam bu hazne içinde şak diye canlanacak */}
      <div ref={container} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
