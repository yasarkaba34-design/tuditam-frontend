useEffect(() => {
  const interval = setInterval(() => {
    fetchCounters(); // API'den güncel verileri çek
  }, 60000); // 60 saniye
  return () => clearInterval(interval);
}, []);
