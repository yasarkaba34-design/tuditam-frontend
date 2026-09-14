/**
 * YKOS – Gerçek Veritabanı Katmanı (Prisma)
 */

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Aktif içerikleri çek
export async function getActivePosts() {
  return await prisma.post.findMany({
    where: { status: "Aktif" }
  });
}

// İndeks alanlarını güncelle
export async function updatePostIndexFields(postId, fields) {
  return await prisma.post.update({
    where: { id: postId },
    data: {
      description: fields.description,
      atlas_code: fields.atlas_code,
      root_phase: fields.root_phase,
      chronology: fields.chronology
    }
  });
}
