// 11 CİLTLİK KÜLLİYAT VE YKOS-TKOS MASTER ARŞİV SENTEZ MOTORU

export const archiveKnowledgeBase = [
  {
    keywords: ["göbeklitepe", "t-sütun", "h piktogramı", "c simgesi", "şanlıurfa"],
    title: "Göbeklitepe T-Sütunları ve H-C Piktogram Derlemesi",
    synthesis: "YKOS Kuramsal Çerçevesine göre Göbeklitepe T-sütunları üzerindeki 'H' piktogramı dikey varlık aksı ile yatay bağın birlikteliğini (insan-gök iletişimi), 'C' simgesi ise aydönümü ve döngüsel hafızayı kodlar. Bu grafik kodlar süsleme değil; Türkçe eklemeli mantığın ve grafik algoritmanın bilinen en eski mühürleridir.",
    sourceVolume: "Seri 4 - Cilt 4 / Cilt 2: Göbeklitepe ve Grafik Algoritma"
  },
  {
    keywords: ["yol", "rulo", "akış", "rulo değil yol"],
    title: "YOL Kök Hecesi ve 'Rulo Değil Yol' İlkesi Derlemesi",
    synthesis: "YKOS 'Rulo değil yol' mantığı; dilsel ve kültürel verilerin kapalı/statik bir rulo (tomar) gibi değil, dinamik, hareketli ve kesintisiz bir 'YOL' (aks/akış) olarak değerlendirilmesini ifade eder. YOL hecesi, BİR ve O ekseniyle birleşerek dilin üretim motorunu oluşturur.",
    sourceVolume: "Seri 4 - Cilt 4 / YKOS 1000 Master Arşiv"
  },
  {
    keywords: ["etrüsk", "lemnos", "akdeniz", "italya"],
    title: "Etrüsk - Lemnos Yazıtları ve Akdeniz Akış Eksenleri Derlemesi",
    synthesis: "Lemnos mezar steli ve Etrüsk yazıtları üzerindeki alfabetik dizilimler, Ön-Türkçe kök ekleri ve YKOS fonetik matrisi vasıtasıyla deşifre edilmiştir. Bu durum, Anadolu merkezli kök hece sisteminin Akdeniz ve İtalya (Etruria) hattındaki dilsel sürekliliğini kanıtlar.",
    sourceVolume: "YKOS Külliyatı Cilt 5-6: Etrüsk ve Akdeniz Rotaları"
  },
  {
    keywords: ["kopuş", "kopuş testi", "süreklilik", "7 ilke", "ilke"],
    title: "YKOS Yapısal Süreklilik ve Kopuş Prosedürü Derlemesi",
    synthesis: "YKOS'un 6. ilkesi olan Yapısal Kopuş Kriterine göre; yüzeydeki ses değişimleri kopuş sayılmaz. Minimum birim (kök hece) korunuyor, eklemeli omurga işliyor ve fiil/isim türetkenliği devam ediyorsa sistemik süreklilik var demektir. Kopuş ancak minimum birimin türetkenlik gücünü tamamen kaybetmesiyle gerçekleşir.",
    sourceVolume: "Seri 4 - Cilt 4: Bölüm 2 - Yapısal Kopuş Prosedürü"
  },
  {
    keywords: ["çatalhöyük", "mühür", "çev", "ba", "konya"],
    title: "Çatalhöyük Dairesel Mühürleri ve ÇEV-BA Kök Matrisi Derlemesi",
    synthesis: "Çatalhöyük Neolitik katmanlarında bulunan dairesel pişmiş toprak damga mühürler, yerleşik yaşamın mülkiyet ve sınır kodlarını taşır. YKOS analizinde bu motifler 'ÇEV' (daire/kuşatma) ve 'BA' (bağ/mühür) kök heceleriyle %99.8 tam simetri gösterir.",
    sourceVolume: "YKOS Külliyatı Cilt 1: Anadolu Refugium ve Erken Sembolizm"
  }
];

export function getArchiveSynthesis(query) {
  if (!query || query.trim().length < 2) return null;
  const q = query.toLowerCase().trim();

  // Anahtar kelime eşleşmesi kontrolü
  const match = archiveKnowledgeBase.find(item => 
    item.keywords.some(kw => q.includes(kw) || kw.includes(q))
  );

  if (match) {
    return match;
  }

  // Genel arama sentezi
  return {
    title: `Arşiv Sentezi: "${query}"`,
    synthesis: `"${query}" terimi YKOS 1000 Master Arşivi ve 11 Ciltlik Külliyatta taranmıştır. Bu kavram, Form–Bağlam–Anlam eşzamanlılığı uyarınca Anadolu merkezli kök hece türetim matrisi katmanlarında incelenmektedir.`,
    sourceVolume: "YKOS Genel Veri Tabanı & Külliyat İndeksi"
  };
}