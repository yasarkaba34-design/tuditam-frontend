// YKOSLiveSemanticEngine - YouTubeBulkIndexer
// Kanal videolarını toplar ve semantik indeks oluşturur

export async function fetchChannelVideos(apiKey, channelId) {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&maxResults=20`;

  const res = await fetch(url);
  const data = await res.json();

  // Videoları sadeleştir
  return data.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    publishedAt: item.snippet.publishedAt,
    tags: item.snippet.tags || [],
  }));
}

// Her video için semantik profil oluştur
export function indexYouTubeVideo(video) {
  return {
    id: video.id,
    title: video.title,
    semanticProfile: {
      lengthEntropy: video.title.length / 100,
      resonance: Math.random(),
      culturalAxis: detectCulturalAxis(video.title),
    },
  };
}

// Kültürel eksen tespiti (örnek)
function detectCulturalAxis(title) {
  const lower = title.toLowerCase();
  if (lower.includes("göbeklitepe")) return "Göbeklitepe";
  if (lower.includes("etrüsk")) return "Etrüsk";
  if (lower.includes("külliyat")) return "Külliyat";
  return "Genel";
}

// Toplu indeksleme
export async function bulkIndexYouTubeChannel(apiKey, channelId) {
  const videos = await fetchChannelVideos(apiKey, channelId);
  const semanticIndex = videos.map(video => indexYouTubeVideo(video));
  return semanticIndex;
}
