export default driverInterface => ({
  isItemFullWidth: () => driverInterface.element.childElementCount === 1,
});
