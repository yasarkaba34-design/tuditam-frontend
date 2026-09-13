// src/services/triggerService.js

import { db } from "../data/firebase"; 
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { runEvaluatorForOne } from "./evaluatorService";

/* Yönetici paneli onay tetikleyicisi */
export const listenForApprovals = (findingId) => {
  const ref = doc(db, "ykos_findings", findingId);

  onSnapshot(ref, (snapshot) => {
    const data = snapshot.data();
    if (!data) return;

    if (data.status === "approved") {
      console.log("Bulgu onaylandı, Evaluator tetiklendi:", findingId);
      runEvaluatorForOne(findingId);
    }
  });
};

/* BubbleMatrix baloncuğu tıklama tetikleyicisi */
export const triggerEvaluator = async (bubble) => {
  try {
    console.log("Evaluator tetikleniyor:", bubble);

    await updateDoc(doc(db, "ykos_open_data", bubble.id), {
      evaluator_ready: {
        title: bubble.title,
        category: bubble.category,
        ykosCode: bubble.ykosCode || null,
        coordinates: bubble.coordinates || null,
        triggeredAt: new Date()
      }
    });

    await runEvaluatorForOne(bubble.id);

    console.log("Evaluator başarıyla çalıştı:", bubble.id);
  } catch (err) {
    console.error("Evaluator tetikleme hatası:", err);
  }
};
