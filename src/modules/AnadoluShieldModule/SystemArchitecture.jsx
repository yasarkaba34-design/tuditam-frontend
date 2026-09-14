<section className="ykos-security">
  <h2>YKOS Yönetici Kimlik Protokolü</h2>

  <p>
    YKOS, çok katmanlı semantik analiz, kültürel veri işleme ve evrensel bilgi entegrasyonu üzerine kurulu bir araştırma sistemidir. 
    Bu mimaride kimlik doğrulama, yalnızca erişim güvenliğini değil, aynı zamanda modüller arası veri akışının bütünlüğünü koruyan 
    temel bir bileşendir. Sistem, yönetici kimliğini üç aşamalı bir protokol üzerinden tanımlar.
  </p>

  <h3>1. Kimlik Doğrulama Katmanı (Authentication Layer)</h3>
  <p>
    Bu katman, YKOS’un çekirdek modüllerine erişim sağlayan üst düzey kullanıcıların doğrulanmasını içerir.
    Yönetici kimliği: <strong>YKOS‑Admin‑001</strong>. Yetki kapsamı: tüm modüller, tüm veri akışları, tüm sistem ayarları.
    Güvenlik modeli: çoklu doğrulama, güvenilir klasör altyapısı, GitHub kimlik eşlemesi.
  </p>

  <h3>2. Yetki Dağılımı Katmanı (Authorization Layer)</h3>
  <p>
    Bu katman, sistem içindeki modüllerin hangi kullanıcı tarafından hangi düzeyde kontrol edileceğini belirler.
    Yönetici kimliği için yetki kapsamı: Atlas Modülü, TehnikPanel, AnadoluShield, EvrenselPano, YKOS Semantic Engine ve 
    root → sembol → kültürel katman → evrensel pano veri akış zinciri.
  </p>

  <h3>3. Güvenli Oturum Katmanı (Secure Session Layer)</h3>
  <p>
    Kimlik doğrulaması tamamlandığında sistem, yönetici için güvenli bir oturum açar:
    VS Code güvenilir klasör tanımlaması, GitHub kimlik eşlemesi, modüller arası güvenli veri aktarımı ve EvrenselPano üzerinde tam kontrol.
  </p>

  <p>
    Bu üç katman birlikte çalışarak YKOS’un bütün modüllerini tek bir yönetici kimliği altında güvenli, tutarlı ve denetlenebilir bir yapıya kavuşturur.
  </p>
</section>
<div className="ykos-admin-badge">
  YKOS‑Admin‑001 • Sistem Yöneticisi
</div>
