import { clusterVideos } from "./YouTubeClusterEngine";

useEffect(() => {
  bulkIndexYouTubeChannel(apiKey, channelId).then(index => {
    const clustered = clusterVideos(index);
    setVideos(clustered);
  });
}, []);
