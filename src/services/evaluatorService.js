import { db } from "../data/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const runEvaluatorForOne = async (id) => {
  try {
    // Burada senin gerçek semiyotik analiz kodun çalışıyor
    const result = {
      score: Math.random(), // örnek
      meaning: "Semiyotik çözümleme tamamlandı",
      verified: true,
      updatedAt: new Date()
    };

    await updateDoc(doc(db, "ykos_open_data", id), {
      evaluator_result: result
    });

    console.log("Evaluator sonucu kaydedildi:", id);
  } catch (err) {
    console.error("Evaluator çalıştırma hatası:", err);
  }
};
