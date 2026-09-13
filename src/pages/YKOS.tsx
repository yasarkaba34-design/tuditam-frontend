import YKOSImportDropzone from "@/components/YKOSImportDropzone";

function YKOSPage() {
  const handleLoad = (payload) => {
    LinguisticSpiralLayer.load(payload.spiral);
    AtlasMap.load(payload.atlas);
    BubbleMatrix.load(payload.bubbleMatrix);
    FluxEngine.restore(payload.flux);

    console.log("YKOS modülleri başarıyla geri yüklendi.");
  };

  return (
    <div>
      <YKOSImportDropzone onLoad={handleLoad} />
    </div>
  );
}

export default YKOSPage;
