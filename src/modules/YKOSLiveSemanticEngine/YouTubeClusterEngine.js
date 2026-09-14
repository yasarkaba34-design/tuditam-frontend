export function clusterVideos(semanticIndex) {
  const clusters = {};

  semanticIndex.forEach(video => {
    video.semanticProfile.forEach(match => {
      const key = match.rota || match.kategori || match.type;

      if (!clusters[key]) {
        clusters[key] = [];
      }

      clusters[key].push(video);
    });
  });

  return clusters;
}
