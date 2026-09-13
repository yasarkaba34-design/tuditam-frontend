// imageService.js

export const uploadImageToImgBB = async (imageFile) => {
  const API_KEY = import.meta.env.VITE_IMGBB_API_KEY; 

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
    if (data.success) {
      return data.data.url; 
    } else {
      console.error("ImgBB API Hatası:", data.error.message);
      return null;
    }
  } catch (error) {
    console.error("Görsel yükleme servisinde hata oluştu:", error);
    return null;
  }
};