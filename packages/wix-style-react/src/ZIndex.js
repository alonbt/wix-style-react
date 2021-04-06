const ZIndexValues = {
  Page: 1,
  Notification: 4000,
  Modal: 5000,
  Tooltip: 6000,
};

export function ZIndex(layerName) {
  const zIndexValue = ZIndexValues[layerName];
  if (!zIndexValue) {
    throw new Error(
      `ZIndex: Layer with name ${layerName} does NOT exist. Layers = ${Object.keys(
        ZIndexValues,
      ).join(', ')}`,
    );
  }
  return zIndexValue;
}
